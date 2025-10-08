import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendContactEmail, sendDemoRequestEmail, testEmailConfig } from './emailService.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:5173', 'http://localhost:3000'], // Your frontend port and common React ports
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Test email configuration endpoint
app.get('/api/test-email', async (req, res) => {
  try {
    const isValid = await testEmailConfig();
    res.json({ 
      success: isValid, 
      message: isValid ? 'Email configuration is valid' : 'Email configuration failed' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Error testing email configuration',
      error: error.message 
    });
  }
});

// Send test email endpoint
app.post('/api/send-test-email', async (req, res) => {
  try {
    const result = await sendContactEmail({
      name: 'Test User',
      email: 'test@example.com',
      company: 'Test Company',
      phone: '+1234567890',
      message: 'This is a test email to verify the email system is working correctly.'
    });

    res.json({
      success: true,
      message: 'Test email sent successfully!',
      messageId: result.messageId
    });
  } catch (error) {
    console.error('Error sending test email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send test email',
      error: error.message
    });
  }
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields'
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Send email
    const result = await sendContactEmail({
      name,
      email,
      company,
      phone,
      message
    });

    console.log(`Contact form submitted by ${name} (${email})`);

    res.json({
      success: true,
      message: 'Your message has been sent successfully! We\'ll get back to you within 24 hours.',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Demo form submission endpoint
app.post('/api/demo', async (req, res) => {
  try {
    const { 
      name, 
      email, 
      contactNumber, 
      companyName, 
      industry, 
      location, 
      budget, 
      preferredContact 
    } = req.body;

    // Basic validation
    if (!name || !email || !contactNumber || !companyName || !industry || !location) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, contact number, company name, industry, and location are required fields'
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Send specialized demo request email
    const result = await sendDemoRequestEmail({
      name,
      email,
      contactNumber,
      companyName,
      industry,
      location,
      budget,
      preferredContact
    });

    console.log(`Demo request submitted by ${name} (${email}) from ${companyName}`);

    res.json({
      success: true,
      message: 'Your demo request has been submitted successfully! We\'ll contact you within 24 hours to schedule your demo.',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('Error processing demo request:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error submitting your demo request. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email notifications will be sent to: ${process.env.EMAIL_TO}`);
  
  // Test email configuration on startup
  testEmailConfig().then(isValid => {
    if (isValid) {
      console.log('✅ Email configuration is valid');
    } else {
      console.log('❌ Email configuration failed - please check your .env file');
    }
  });
});

export default app;
