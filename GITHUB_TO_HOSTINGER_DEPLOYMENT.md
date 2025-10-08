# 🚀 Deploy Private GitHub Repository to Hostinger

## 📋 Overview
Since your repository is private, you have several secure deployment options for Hostinger:

## 🔐 Method 1: GitHub Actions with SSH (Recommended)

### 1.1 Setup SSH Key on Hostinger
1. **Generate SSH Key** (on your local machine):
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
# Save as: hostinger_deploy_key
```

2. **Add Public Key to Hostinger**:
   - Login to Hostinger Control Panel
   - Go to **Advanced → SSH Access**
   - Add the **public key** (`hostinger_deploy_key.pub`)

3. **Add Private Key to GitHub Secrets**:
   - Go to your GitHub repo → **Settings → Secrets and Variables → Actions**
   - Add these secrets:
     - `HOSTINGER_SSH_KEY`: Content of private key file
     - `HOSTINGER_HOST`: Your Hostinger server IP/hostname
     - `HOSTINGER_USERNAME`: Your Hostinger username
     - `HOSTINGER_PATH`: Path to your domain folder (e.g., `/public_html`)

### 1.2 Create GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Hostinger

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build production
      run: npm run build:prod
      
    - name: Setup SSH
      uses: webfactory/ssh-agent@v0.8.0
      with:
        ssh-private-key: ${{ secrets.HOSTINGER_SSH_KEY }}
        
    - name: Deploy to Hostinger
      run: |
        # Create deployment directory
        ssh -o StrictHostKeyChecking=no ${{ secrets.HOSTINGER_USERNAME }}@${{ secrets.HOSTINGER_HOST }} "mkdir -p ${{ secrets.HOSTINGER_PATH }}/temp_deploy"
        
        # Upload built files
        scp -r dist/* ${{ secrets.HOSTINGER_USERNAME }}@${{ secrets.HOSTINGER_HOST }}:${{ secrets.HOSTINGER_PATH }}/
        
        # Upload server files
        scp -r server/ package.json ${{ secrets.HOSTINGER_USERNAME }}@${{ secrets.HOSTINGER_HOST }}:${{ secrets.HOSTINGER_PATH }}/
        
        # Install dependencies and restart
        ssh ${{ secrets.HOSTINGER_USERNAME }}@${{ secrets.HOSTINGER_HOST }} "cd ${{ secrets.HOSTINGER_PATH }} && npm install --production && pm2 restart all || pm2 start server/server.js --name datenintelligenz"
```

## 🔐 Method 2: Manual Download and Upload

### 2.1 Download Repository as ZIP
1. Go to your **GitHub repository**
2. Click **Code → Download ZIP**
3. Extract the ZIP file locally

### 2.2 Build and Upload
```bash
# Extract and navigate to folder
cd cloud-data-navigators-main

# Install dependencies
npm install

# Build for production
npm run build:prod

# Now upload files to Hostinger via File Manager or FTP
```

### 2.3 Files to Upload to Hostinger:
- **Frontend**: Upload `dist/` contents to `public_html/`
- **Backend**: Upload `server/` folder to `public_html/server/`
- **Config**: Upload `package.json` to `public_html/`
- **Environment**: Create `.env` file with production variables

## 🔐 Method 3: Git Clone with Personal Access Token

### 3.1 Create Personal Access Token
1. GitHub → **Settings → Developer Settings → Personal Access Tokens**
2. Generate **Classic Token** with `repo` permissions
3. Copy the token (save it securely)

### 3.2 Clone on Hostinger Server
```bash
# SSH into Hostinger
ssh your-username@your-server.com

# Clone using token
git clone https://your-token@github.com/Shivamyadav1312/cloud-data-navigators.git

# Navigate and setup
cd cloud-data-navigators
npm install --production
npm run build:prod

# Copy files to web directory
cp -r dist/* ../public_html/
cp -r server ../public_html/
cp package.json ../public_html/
```

## 🔐 Method 4: FTP/SFTP Upload

### 4.1 Prepare Files Locally
```bash
# Build the project
npm run deploy:prepare

# This creates:
# - dist/ (frontend build)
# - server/ (backend files)
# - package.json
# - .env.production
```

### 4.2 Upload via FTP Client
Use **FileZilla**, **WinSCP**, or similar:

**Connection Details** (from Hostinger):
- **Host**: Your FTP hostname
- **Username**: Your FTP username  
- **Password**: Your FTP password
- **Port**: 21 (FTP) or 22 (SFTP)

**Upload Structure**:
```
public_html/
├── index.html (from dist/)
├── assets/ (from dist/assets/)
├── server/
│   ├── server.js
│   └── emailService.js
├── package.json
├── .env (rename from .env.production)
└── .htaccess (from public/.htaccess)
```

## ⚙️ Hostinger Configuration After Upload

### Step 1: Create Node.js Application
1. **Hostinger Control Panel → Advanced → Node.js**
2. **Create Application**:
   - **Node.js Version**: 18.x
   - **Application Root**: `/public_html`
   - **Application URL**: Your domain
   - **Startup File**: `server/server.js`

### Step 2: Set Environment Variables
In **Node.js App Settings**, add:
```env
NODE_ENV=production
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=sy5952832@gmail.com
EMAIL_PASS=kuirenosfviamnbi
EMAIL_FROM=sy5952832@gmail.com
EMAIL_TO=Data@aiforbussiness.com
FRONTEND_URL=https://your-domain.com
PORT=3001
```

### Step 3: Install Dependencies
In **Hostinger Terminal**:
```bash
cd /public_html
npm install --production
```

### Step 4: Update CORS Settings
Edit `server/server.js` to include your actual domain:
```javascript
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? [process.env.FRONTEND_URL, 'https://your-actual-domain.com']
  : ['http://localhost:8080', 'http://localhost:5173', 'http://localhost:3000'];
```

## 🔄 Automated Deployment Script

Create `deploy-to-hostinger.js`:

```javascript
#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';

console.log('🚀 Deploying to Hostinger...');

// Build production
console.log('📦 Building production...');
execSync('npm run build:prod', { stdio: 'inherit' });

// Create deployment package
console.log('📁 Creating deployment package...');
execSync('zip -r hostinger-deploy.zip dist/ server/ package.json .env.production public/.htaccess', { stdio: 'inherit' });

console.log('✅ Deployment package created: hostinger-deploy.zip');
console.log('📤 Upload this file to Hostinger and extract in public_html/');
```

Add to `package.json`:
```json
{
  "scripts": {
    "deploy:package": "node deploy-to-hostinger.js"
  }
}
```

## 🧪 Testing Deployment

### 1. Test Endpoints
- **Health Check**: `https://your-domain.com/api/health`
- **Email Test**: `https://your-domain.com/api/test-email`

### 2. Test Demo Form
1. Fill out demo form on your website
2. Check if email arrives at `Data@aiforbussiness.com`
3. Verify all form fields are included

### 3. Test WhatsApp Integration
- Click WhatsApp float button
- Verify numbers work: +91-83747-96351, +91-98711-06515

## 🔧 Troubleshooting

### Common Issues:

**1. Build Fails**
```bash
# Clear cache and rebuild
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run build:prod
```

**2. Node.js App Won't Start**
- Check Node.js version (use 18.x)
- Verify `server/server.js` path is correct
- Check Hostinger error logs

**3. Email Not Working**
- Verify Gmail app password is correct
- Test with `/api/test-email` endpoint
- Check environment variables

**4. CORS Errors**
- Update domain in `server.js`
- Ensure HTTPS is enabled
- Check browser console for specific errors

## 📋 Quick Deployment Checklist

- [ ] **Build**: Run `npm run build:prod`
- [ ] **Upload**: Transfer files to Hostinger
- [ ] **Node.js**: Create app in Hostinger panel
- [ ] **Environment**: Set all required variables
- [ ] **Dependencies**: Run `npm install --production`
- [ ] **Domain**: Update CORS settings
- [ ] **Test**: Verify all functionality works
- [ ] **SSL**: Enable HTTPS certificate
- [ ] **Email**: Test demo form submissions

## 🎉 Deployment Complete!

Your private GitHub repository is now successfully deployed to Hostinger with:
- ✅ **Secure deployment** from private repo
- ✅ **Email notifications** working
- ✅ **WhatsApp integration** functional
- ✅ **Production optimizations** enabled
- ✅ **Professional UI** with all features

Choose the method that works best for your workflow! 🚀
