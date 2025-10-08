import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send demo request email
export const sendDemoRequestEmail = async (formData) => {
  try {
    const transporter = createTransporter();

    // Email content for demo request
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `🎯 New Demo Request from ${formData.name} - ${formData.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 3px solid #28a745; padding-bottom: 10px;">
            🎯 New Demo Request Submission
          </h2>
          
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; font-size: 18px;">Priority: Schedule Demo Call</h3>
            <p style="margin: 0; opacity: 0.9;">A potential client is interested in our services and has requested a demo.</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #28a745; margin-top: 0;">👤 Contact Information</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 8px 0;">${formData.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #007bff;">${formData.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${formData.contactNumber}" style="color: #007bff;">${formData.contactNumber}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Company:</td>
                <td style="padding: 8px 0;">${formData.companyName}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 2px solid #28a745; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #28a745; margin-top: 0;">🏢 Business Details</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 30%;">Industry:</td>
                <td style="padding: 8px 0;"><span style="background: #e3f2fd; padding: 4px 8px; border-radius: 4px; color: #1976d2;">${formData.industry}</span></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Location:</td>
                <td style="padding: 8px 0;">${formData.location}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Budget Range:</td>
                <td style="padding: 8px 0;">${formData.budget || '<em>Not specified</em>'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Preferred Contact:</td>
                <td style="padding: 8px 0;">${formData.preferredContact || '<em>Not specified</em>'}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #856404; margin-top: 0;">📋 Next Steps</h3>
            <ul style="color: #856404; margin: 0; padding-left: 20px;">
              <li>Contact the client within 24 hours</li>
              <li>Schedule a demo call based on their preferred contact method</li>
              <li>Prepare industry-specific use cases for ${formData.industry}</li>
              <li>Review their budget range: ${formData.budget || 'Not specified'}</li>
            </ul>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
            <p><strong>Demo Request Details:</strong></p>
            <p>📧 Email: <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p>📞 Phone: <a href="tel:${formData.contactNumber}">${formData.contactNumber}</a></p>
            <p>💬 WhatsApp: <a href="https://wa.me/${formData.contactNumber.replace(/[^0-9]/g, '')}" target="_blank">Send WhatsApp</a></p>
            <p>🕒 Submitted: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        🎯 NEW DEMO REQUEST SUBMISSION
        
        CONTACT INFORMATION:
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.contactNumber}
        Company: ${formData.companyName}
        
        BUSINESS DETAILS:
        Industry: ${formData.industry}
        Location: ${formData.location}
        Budget Range: ${formData.budget || 'Not specified'}
        Preferred Contact Method: ${formData.preferredContact || 'Not specified'}
        
        NEXT STEPS:
        - Contact client within 24 hours
        - Schedule demo call
        - Prepare industry-specific use cases
        - Review budget requirements
        
        Submitted on: ${new Date().toLocaleString()}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Demo request email sent successfully:', info.messageId);
    console.log('Demo request details:');
    console.log('- From:', process.env.EMAIL_FROM);
    console.log('- To:', process.env.EMAIL_TO);
    console.log('- Subject:', mailOptions.subject);
    console.log('- Client:', `${formData.name} from ${formData.companyName}`);
    console.log('- Industry:', formData.industry);
    
    return {
      success: true,
      messageId: info.messageId
    };
  } catch (error) {
    console.error('Error sending demo request email:', error);
    throw new Error('Failed to send demo request email: ' + error.message);
  }
};

// Send contact form email
export const sendContactEmail = async (formData) => {
  try {
    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details</h3>
            
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
            ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <h3 style="color: #007bff; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #333;">${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
            <p>This email was sent from the contact form on your website.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        ${formData.company ? `Company: ${formData.company}` : ''}
        ${formData.phone ? `Phone: ${formData.phone}` : ''}
        
        Message:
        ${formData.message}
        
        Submitted on: ${new Date().toLocaleString()}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    console.log('Email details:');
    console.log('- From:', process.env.EMAIL_FROM);
    console.log('- To:', process.env.EMAIL_TO);
    console.log('- Subject:', mailOptions.subject);
    console.log('- Response:', info.response);
    
    return {
      success: true,
      messageId: info.messageId
    };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email: ' + error.message);
  }
};

// Test email configuration
export const testEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('Email configuration is valid');
    return true;
  } catch (error) {
    console.error('Email configuration error:', error);
    return false;
  }
};
