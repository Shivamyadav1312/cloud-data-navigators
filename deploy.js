#!/usr/bin/env node

/**
 * Deployment Script for Hostinger
 * Prepares the application for production deployment
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting deployment preparation...\n');

// Step 1: Clean previous builds
console.log('📦 Cleaning previous builds...');
try {
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true });
    console.log('✅ Cleaned dist folder');
  }
} catch (error) {
  console.log('⚠️  No previous build to clean');
}

// Step 2: Build production version
console.log('\n🔨 Building production version...');
try {
  execSync('npm run build:deploy', { stdio: 'inherit' });
  console.log('✅ Production build completed');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 3: Verify build output
console.log('\n🔍 Verifying build output...');
const distPath = path.join(process.cwd(), 'dist');
if (fs.existsSync(distPath)) {
  const files = fs.readdirSync(distPath);
  console.log('✅ Build files created:', files.length, 'files');
  console.log('📁 Files in dist:', files.slice(0, 5).join(', '), files.length > 5 ? '...' : '');
} else {
  console.error('❌ Build output not found');
  process.exit(1);
}

// Step 4: Check required files
console.log('\n📋 Checking required files...');
const requiredFiles = [
  'server/server.js',
  'server/emailService.js', 
  'package.json',
  '.env.production'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.error('\n❌ Some required files are missing. Please check the files above.');
  process.exit(1);
}

// Step 5: Create deployment checklist
console.log('\n📝 Creating deployment checklist...');
const checklist = `
# 🚀 DEPLOYMENT CHECKLIST

## Files to Upload to Hostinger:

### 1. Frontend (public_html/)
- Upload ALL contents of 'dist/' folder to public_html/
- Ensure index.html is in the root of public_html/

### 2. Backend Files
- Upload 'server/' folder
- Upload 'package.json'
- Upload '.env.production' (rename to .env on server)

### 3. Hostinger Configuration
- [ ] Create Node.js app in Hostinger panel
- [ ] Set startup file: server/server.js
- [ ] Install dependencies: npm install --production
- [ ] Set environment variables in Node.js panel
- [ ] Update CORS domain in server.js

### 4. Environment Variables to Set in Hostinger:
- NODE_ENV=production
- EMAIL_HOST=smtp.gmail.com
- EMAIL_USER=your-email@gmail.com
- EMAIL_PASS=your-gmail-app-password
- EMAIL_FROM=your-email@gmail.com
- EMAIL_TO=Data@aiforbussiness.com
- FRONTEND_URL=https://your-domain.com

### 5. Testing
- [ ] Visit your domain
- [ ] Test demo form submission
- [ ] Check email notifications
- [ ] Test WhatsApp buttons
- [ ] Verify all pages load correctly

## 📧 Email Setup:
1. Enable 2FA on Gmail
2. Generate App Password (Google Account > Security > App Passwords)
3. Use App Password in EMAIL_PASS variable

## 🔧 Troubleshooting:
- Check Hostinger Node.js logs for errors
- Test API endpoints: /api/health, /api/test-email
- Verify CORS settings match your domain
`;

fs.writeFileSync('DEPLOYMENT_CHECKLIST.md', checklist);
console.log('✅ Created DEPLOYMENT_CHECKLIST.md');

// Step 6: Final summary
console.log('\n🎉 DEPLOYMENT PREPARATION COMPLETE!\n');
console.log('📂 Files ready for upload:');
console.log('   - dist/ (upload contents to public_html/)');
console.log('   - server/ (upload entire folder)');
console.log('   - package.json');
console.log('   - .env.production');
console.log('\n📖 Next steps:');
console.log('   1. Read HOSTINGER_DEPLOYMENT.md for detailed instructions');
console.log('   2. Follow DEPLOYMENT_CHECKLIST.md for step-by-step deployment');
console.log('   3. Upload files to Hostinger');
console.log('   4. Configure Node.js app in Hostinger panel');
console.log('\n🚀 Your application is ready for production deployment!');
