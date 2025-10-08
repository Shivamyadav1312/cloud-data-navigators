# Datenintelligenz - Exhaustive Data Solutions and Consulting

[![Deploy Status](https://img.shields.io/badge/Deploy-Production%20Ready-brightgreen)](https://github.com/Shivamyadav1312/cloud-data-navigators)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18+-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)](https://www.typescriptlang.org/)

**Transform Data Into Intelligence** - A comprehensive data engineering and AI consulting platform serving 16+ industries with specialized solutions for modern businesses.

## 🚀 Live Demo

Visit our live application: [Datenintelligenz.com](https://your-domain.com)

## 📋 Overview

Datenintelligenz is a professional data consulting platform that provides:

- **Custom Build Services** - Tailored data engineering solutions
- **Product Plus Build Solutions** - Comprehensive analytics platforms
- **Industry Expertise** - Specialized solutions across 16+ verticals
- **AI/ML Implementation** - Advanced machine learning deployments
- **Email Notifications** - Automated lead management system
- **WhatsApp Integration** - Direct client communication channels

## 🏭 Industries We Serve

Our platform covers comprehensive solutions for:

| Industry | Key Focus Areas |
|----------|----------------|
| **Retail & eCommerce** | Customer Segmentation, Demand Forecasting, Price Optimization |
| **Financial Services** | Risk Analytics, Fraud Detection, Regulatory Compliance |
| **Healthcare** | Clinical Decision Support, Drug Discovery, Population Health |
| **Manufacturing** | Sensor Analytics, Quality Detection, Digital Twins |
| **Real Estate** | Property Value Prediction, Tenant Screening, Occupancy Optimization |
| **Utilities & Energy** | Grid Analytics, Predictive Maintenance, Demand Response |
| **FMCG** | Demand Planning, Campaign Analytics, Inventory Optimization |
| **Internet Businesses** | User Journey Analytics, Marketing ROI, Personalization |
| **Technology** | Product Analytics, User Engagement, Threat Detection |
| **Agriculture** | Precision Agriculture, Yield Prediction, Supply Traceability |
| **Automotive** | Vehicle Analytics, Autonomous Systems, Market Intelligence |
| **Textiles & Apparel** | Fashion Trends, Inventory Management, Social Analytics |
| **Construction** | Risk Assessment, Cost Prediction, Project Analytics |
| **Trading** | Sentiment Analysis, Price Prediction, Trading Algorithms |
| **Transportation & Logistics** | Route Planning, Fleet Management, Supply Chain Visibility |
| **Media & Entertainment** | Audience Analytics, Content Recommendations, Social Monitoring |

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for responsive styling
- **shadcn/ui** for modern UI components
- **React Router** for client-side routing
- **GSAP** for smooth animations
- **Lucide React** for consistent icons

### Backend
- **Node.js** with Express.js
- **Nodemailer** for email notifications
- **CORS** for cross-origin requests
- **dotenv** for environment management

### Development Tools
- **TypeScript** for type safety
- **ESLint** for code quality
- **Concurrently** for running multiple processes
- **Git** for version control

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm installed
- Git for version control

### Local Development

```bash
# Clone the repository
git clone https://github.com/Shivamyadav1312/cloud-data-navigators.git

# Navigate to project directory
cd cloud-data-navigators

# Install dependencies
npm install

# Start development servers (frontend + backend)
npm run dev:full

# Or run separately:
# Frontend only
npm run dev

# Backend only
npm run server
```

### Environment Configuration

Create a `.env` file in the root directory:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=Data@aiforbussiness.com

# Server Configuration
PORT=3001
NODE_ENV=development
```

## 🚀 Deployment

### Production Build

```bash
# Build for production
npm run build:prod

# Start production server
npm start

# Create deployment package
npm run deploy:prepare
```

### Hostinger Deployment

We provide comprehensive deployment guides:

- **[Hostinger Deployment Guide](HOSTINGER_DEPLOYMENT.md)** - Complete setup instructions
- **[GitHub to Hostinger Guide](GITHUB_TO_HOSTINGER_DEPLOYMENT.md)** - Deploy from private repository

Quick deployment steps:
1. Run `npm run deploy:prepare`
2. Upload files to Hostinger
3. Configure Node.js app
4. Set environment variables
5. Install dependencies: `npm install --production`

## 📧 Features

### Email Notification System
- **Demo Form Submissions** - Automated email alerts for new demo requests
- **Contact Forms** - Professional email templates with client details
- **Lead Management** - Structured data collection and notification

### WhatsApp Integration
- **Floating Contact Button** - Always accessible on all pages
- **Multiple Numbers** - Primary (+91-83747-96351) and Secondary (+91-98711-06515)
- **Direct Integration** - One-click WhatsApp messaging

### Professional UI/UX
- **Responsive Design** - Works on all devices
- **Modern Animations** - GSAP-powered smooth transitions
- **SEO Optimized** - Proper meta tags and structured data
- **Fast Loading** - Optimized builds and code splitting

## 📱 API Endpoints

### Health Check
```
GET /api/health
```

### Demo Form Submission
```
POST /api/demo
Content-Type: application/json

{
  "name": "Client Name",
  "email": "client@example.com",
  "contactNumber": "+91-1234567890",
  "companyName": "Company Name",
  "industry": "Technology",
  "location": "Mumbai, India",
  "budget": "$10,000 - $50,000",
  "preferredContact": "Email"
}
```

### Contact Form Submission
```
POST /api/contact
Content-Type: application/json

{
  "name": "Client Name",
  "email": "client@example.com",
  "company": "Company Name",
  "phone": "+91-1234567890",
  "message": "Inquiry message"
}
```

## 📊 Project Structure

```
cloud-data-navigators/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Navigation.tsx  # Main navigation
│   │   ├── Footer.tsx      # Site footer
│   │   ├── DemoForm.tsx    # Demo request form
│   │   └── WhatsAppFloat.tsx # WhatsApp integration
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Landing page
│   │   ├── Services.tsx    # Services overview
│   │   ├── Industries.tsx  # Industries listing
│   │   ├── Solutions.tsx   # Solutions page
│   │   ├── Capabilities.tsx # Capabilities overview
│   │   ├── Contact.tsx     # Contact page
│   │   ├── ServiceDetail.tsx # Individual service pages
│   │   ├── IndustryDetail.tsx # Individual industry pages
│   │   └── legal/          # Legal pages
│   └── App.tsx             # Main application component
├── server/
│   ├── server.js           # Express server
│   └── emailService.js     # Email handling
├── public/                 # Static assets
├── dist/                   # Production build
└── docs/                   # Documentation
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Contact & Support

- **Email**: Data@aiforbussiness.com
- **Phone**: +91-83747-96351 | +91-98711-06515
- **WhatsApp**: Direct integration available on website
- **Location**: Global Offices - India, USA, Europe

## 📄 License

This project is proprietary software developed for Datenintelligenz. All rights reserved.

## 🔧 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear cache and rebuild
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run build:prod
```

**Email Not Working:**
- Verify Gmail app password is correct
- Check environment variables
- Test with `/api/test-email` endpoint

**Development Server Issues:**
```bash
# Kill existing processes
npx kill-port 8080 3001

# Restart development
npm run dev:full
```

---

**Built with ❤️ by the Datenintelligenz Team**

*Transform your data into intelligence with our comprehensive data engineering and AI consulting services.*
