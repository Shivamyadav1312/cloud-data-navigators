# 🚀 Hostinger Deployment Guide for Datenintelligenz

## 📋 Prerequisites

1. **Hostinger Account** with Node.js hosting support
2. **Domain** configured in Hostinger
3. **Email Configuration** (Gmail App Password recommended)

## 🔧 Step 1: Prepare for Deployment

### 1.1 Build the Application
```bash
npm run build:prod
```

### 1.2 Update Environment Variables
Create `.env.production` with your actual production values:
```env
NODE_ENV=production
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=Data@aiforbussiness.com
PORT=3001
FRONTEND_URL=https://your-domain.com
```

## 📂 Step 2: File Structure for Upload

Upload these files/folders to Hostinger:
```
public_html/
├── dist/                 # Built frontend files
├── server/              # Backend server files
├── .env.production      # Production environment variables
├── package.json         # Dependencies
└── node_modules/        # Dependencies (or install on server)
```

## 🌐 Step 3: Hostinger Configuration

### 3.1 Upload Files
1. **Via File Manager**: Upload `dist` folder contents to `public_html/`
2. **Via FTP**: Upload all files maintaining folder structure
3. **Backend Files**: Upload `server/` folder and `package.json`

### 3.2 Node.js Setup in Hostinger
1. Go to **Hostinger Control Panel**
2. Navigate to **Advanced → Node.js**
3. **Create Node.js App**:
   - **Node.js Version**: 18.x or higher
   - **Application Root**: `/public_html`
   - **Application URL**: Your domain
   - **Application Startup File**: `server/server.js`

### 3.3 Install Dependencies
In Hostinger's Node.js terminal:
```bash
npm install --production
```

## ⚙️ Step 4: Server Configuration

### 4.1 Update CORS Settings
In `server/server.js`, update the domain:
```javascript
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? [process.env.FRONTEND_URL, 'https://your-actual-domain.com']
  : ['http://localhost:8080', 'http://localhost:5173', 'http://localhost:3000'];
```

### 4.2 Environment Variables in Hostinger
1. Go to **Node.js App Settings**
2. Add **Environment Variables**:
   - `NODE_ENV=production`
   - `EMAIL_HOST=smtp.gmail.com`
   - `EMAIL_USER=your-email@gmail.com`
   - `EMAIL_PASS=your-app-password`
   - `EMAIL_TO=Data@aiforbussiness.com`
   - `FRONTEND_URL=https://your-domain.com`

## 📧 Step 5: Email Configuration

### 5.1 Gmail App Password Setup
1. Enable **2-Factor Authentication** on Gmail
2. Generate **App Password**:
   - Google Account → Security → App Passwords
   - Select "Mail" and generate password
3. Use this app password in `EMAIL_PASS`

### 5.2 Test Email Configuration
Access: `https://your-domain.com/api/test-email`

## 🔄 Step 6: Deployment Process

### 6.1 Automated Deployment Script
```bash
# Build and prepare
npm run build:prod

# Upload dist/ contents to public_html/
# Upload server/ folder
# Upload package.json
# Set environment variables in Hostinger panel
```

### 6.2 Manual Deployment Steps
1. **Build**: `npm run build:prod`
2. **Upload**: Transfer `dist/` contents to `public_html/`
3. **Backend**: Upload `server/` folder
4. **Dependencies**: Run `npm install --production` in Hostinger terminal
5. **Environment**: Set variables in Hostinger Node.js panel
6. **Start**: Restart Node.js app in Hostinger

## 🧪 Step 7: Testing

### 7.1 Frontend Testing
- Visit your domain: `https://your-domain.com`
- Test navigation and UI components
- Verify WhatsApp float button works

### 7.2 Backend Testing
- Health check: `https://your-domain.com/api/health`
- Email test: `https://your-domain.com/api/test-email`
- Demo form submission test

### 7.3 Email Testing
1. Submit a demo form
2. Check if email arrives at `Data@aiforbussiness.com`
3. Verify all form fields are included

## 🔧 Step 8: Troubleshooting

### Common Issues:

**1. CORS Errors**
- Update `allowedOrigins` in `server.js` with your actual domain
- Ensure HTTPS is used in production

**2. Email Not Working**
- Verify Gmail app password is correct
- Check `EMAIL_TO` address is correct
- Test with `/api/test-email` endpoint

**3. 404 Errors**
- Ensure `dist/` contents are in `public_html/` root
- Check `.htaccess` for SPA routing (if needed)

**4. Node.js App Not Starting**
- Check Node.js version compatibility
- Verify `package.json` and dependencies
- Check Hostinger error logs

## 📱 Step 9: Production Features

### Working Features:
✅ **Demo Form** with email notifications
✅ **WhatsApp Float** button with your numbers
✅ **Contact Forms** with email integration
✅ **Responsive Design** for all devices
✅ **SEO Optimized** with proper meta tags
✅ **Legal Pages** (Terms of Service)

### Email Notifications Include:
- 📧 **Contact Information**: Name, email, phone, company
- 🏢 **Business Details**: Industry, location, budget
- 📋 **Next Steps**: Action items for follow-up
- 💬 **Quick Actions**: Email, phone, WhatsApp links

## 🚀 Step 10: Go Live Checklist

- [ ] Domain configured and pointing to Hostinger
- [ ] SSL certificate enabled (HTTPS)
- [ ] Node.js app created and configured
- [ ] Environment variables set
- [ ] Files uploaded and dependencies installed
- [ ] Email configuration tested
- [ ] Demo form tested end-to-end
- [ ] WhatsApp links tested
- [ ] All pages loading correctly
- [ ] Mobile responsiveness verified

## 📞 Support

If you encounter issues:
1. Check Hostinger's Node.js documentation
2. Verify email configuration with test endpoints
3. Check browser console for JavaScript errors
4. Review Hostinger error logs in control panel

Your application is now production-ready for Hostinger deployment! 🎉
