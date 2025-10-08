# Build Troubleshooting Guide

## Common Build Issues and Solutions

### 1. Terser Not Found Error

**Error:**
```
[vite:terser] terser not found. Since Vite v3, terser has become an optional dependency. You need to install it.
```

**Solutions:**

**Option A: Use esbuild minifier (Recommended for deployment)**
```bash
npm run build:deploy
```

**Option B: Install Terser**
```bash
npm install --save-dev terser
npm run build:prod
```

**Option C: Use standard build without minification**
```bash
npm run build
```

### 2. Memory Issues During Build

**Error:**
```
JavaScript heap out of memory
```

**Solution:**
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build:deploy

# Or on Windows
set NODE_OPTIONS=--max-old-space-size=4096 && npm run build:deploy
```

### 3. Module Resolution Issues

**Error:**
```
Cannot resolve module '@/components/...'
```

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run build:deploy
```

### 4. TypeScript Build Errors

**Error:**
```
Type errors during build
```

**Solution:**
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Fix type errors or skip type checking for build
npm run build -- --mode production --skipTypeCheck
```

### 5. Deployment Platform Specific Issues

#### Vercel
```bash
# Use deployment-compatible build
npm run build:deploy
```

#### Netlify
```bash
# Build command in netlify.toml or dashboard
npm run build:deploy
```

#### Hostinger
```bash
# Use the deployment preparation script
npm run deploy:prepare
```

## Build Commands Reference

| Command | Purpose | Minifier | Use Case |
|---------|---------|----------|----------|
| `npm run build` | Standard build | Default | Development testing |
| `npm run build:dev` | Development build | None | Development |
| `npm run build:prod` | Production build | Terser | Local production |
| `npm run build:deploy` | Deployment build | esbuild | Hosting platforms |
| `npm run deploy:prepare` | Full deployment prep | esbuild | Complete package |

## Environment-Specific Configurations

### Local Development
```bash
npm run dev:full
```

### Production Testing
```bash
npm run build:deploy
npm run preview
```

### Deployment Preparation
```bash
npm run deploy:prepare
```

## Performance Optimization

### Bundle Analysis
```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

plugins: [
  react(),
  visualizer({
    filename: 'dist/stats.html',
    open: true
  })
]
```

### Build Size Optimization
- Use `build:deploy` for smaller bundles
- Enable tree shaking (automatic with Vite)
- Use dynamic imports for code splitting
- Optimize images and assets

## Quick Fix Commands

```bash
# Complete reset and rebuild
rm -rf node_modules package-lock.json dist
npm cache clean --force
npm install
npm run build:deploy

# Memory-safe build
NODE_OPTIONS="--max-old-space-size=4096" npm run build:deploy

# Skip type checking (emergency)
npm run build -- --mode production --skipTypeCheck
```

## Contact Support

If build issues persist:
- Check the main README.md troubleshooting section
- Review deployment guides in HOSTINGER_DEPLOYMENT.md
- Contact: Data@aiforbussiness.com
