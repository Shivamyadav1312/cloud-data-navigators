# Vercel Deployment Setup

## 🚀 Environment Variables

Add these environment variables in your Vercel dashboard:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:

```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=sy5952832@gmail.com
EMAIL_PASS=kuirenosfviamnbi
EMAIL_FROM=sy5952832@gmail.com
EMAIL_TO=rohan.2302007@gmail.com
```

## 📁 File Structure

Your project now has:
- `/api/contact.js` - Vercel serverless function for handling contact form
- Frontend calls `/api/contact` which works both locally and on Vercel

## 🔄 Deployment Steps

1. **Add environment variables** to Vercel dashboard
2. **Commit and push** your changes:
   ```bash
   git add .
   git commit -m "Add Vercel serverless function for contact form"
   git push
   ```
3. **Vercel will auto-deploy** your changes

## 🧪 Testing

After deployment:
1. Visit your deployed site: https://cloud-data-navigators.vercel.app/
2. Go to the Contact page
3. Fill out and submit the form
4. Check for emails at rohan.2302007@gmail.com

## 🔧 Local Development

For local development, you can still use:
```bash
npm run dev:full
```

This will run both the Vite dev server and your Express server for local testing.
