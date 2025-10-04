# Email Notification Setup

This project now includes email notifications using Nodemailer when someone submits the contact form.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email Settings

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your email configuration:
   ```env
   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=your-email@gmail.com
   EMAIL_TO=contact@aiforbussiness.com

   # Server Configuration
   PORT=3001
   ```

### 3. Gmail Setup (Recommended)

If using Gmail, you need to:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this app password in `EMAIL_PASS` (not your regular password)

### 4. Alternative Email Providers

You can use other email providers by updating the SMTP settings:

**Outlook/Hotmail:**
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

**Yahoo:**
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
```

**Custom SMTP:**
```env
EMAIL_HOST=your-smtp-server.com
EMAIL_PORT=587
```

## 🏃‍♂️ Running the Application

### Option 1: Run Both Frontend and Backend Together
```bash
npm run dev:full
```

### Option 2: Run Separately

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run server
```

## 📧 How It Works

1. **Frontend** (http://localhost:5173): React app with contact form
2. **Backend** (http://localhost:3001): Express server with email service
3. **Email Flow**:
   - User fills contact form
   - Frontend sends data to `/api/contact`
   - Backend validates data and sends email using Nodemailer
   - Email notification sent to `contact@aiforbussiness.com`

## 🔧 API Endpoints

- `GET /api/health` - Server health check
- `GET /api/test-email` - Test email configuration
- `POST /api/contact` - Submit contact form

## 🐛 Troubleshooting

### Email Not Sending?

1. **Check server logs** for error messages
2. **Test email config**: Visit `http://localhost:3001/api/test-email`
3. **Verify credentials** in `.env` file
4. **Check spam folder** for received emails
5. **Gmail users**: Ensure you're using an app password, not your regular password

### Common Issues:

- **"Invalid login"**: Check EMAIL_USER and EMAIL_PASS
- **"Connection timeout"**: Check EMAIL_HOST and EMAIL_PORT
- **"Self signed certificate"**: Add `NODE_TLS_REJECT_UNAUTHORIZED=0` to .env (not recommended for production)

## 🔒 Security Notes

- Never commit `.env` file to version control
- Use app passwords instead of regular passwords
- Consider using environment-specific configurations for production
- The `.env` file is already added to `.gitignore`

## 📝 Email Template

The email notifications include:
- Sender's contact details (name, email, company, phone)
- Message content with proper formatting
- Timestamp
- Professional HTML styling

## 🎯 Next Steps

- Set up email templates for different types of inquiries
- Add email validation and spam protection
- Configure production email service (SendGrid, AWS SES, etc.)
- Add email logging and analytics
