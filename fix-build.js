#!/usr/bin/env node

/**
 * Build Fix Script
 * Clears cache and forces a clean build with esbuild
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔧 Fixing Build Issues...\n');

// Step 1: Clean all build artifacts and cache
console.log('🧹 Cleaning build artifacts and cache...');
const cleanPaths = [
  'dist',
  'node_modules/.vite',
  '.vite',
  'node_modules/.cache'
];

cleanPaths.forEach(cleanPath => {
  if (fs.existsSync(cleanPath)) {
    try {
      fs.rmSync(cleanPath, { recursive: true, force: true });
      console.log(`✅ Cleaned: ${cleanPath}`);
    } catch (error) {
      console.log(`⚠️  Could not clean ${cleanPath}: ${error.message}`);
    }
  }
});

// Step 2: Clear npm cache
console.log('\n📦 Clearing npm cache...');
try {
  execSync('npm cache clean --force', { stdio: 'inherit' });
  console.log('✅ npm cache cleared');
} catch (error) {
  console.log('⚠️  Could not clear npm cache');
}

// Step 3: Try different build approaches
console.log('\n🔨 Attempting build with different configurations...');

const buildAttempts = [
  {
    name: 'Standard build (should use esbuild from config)',
    command: 'npm run build'
  },
  {
    name: 'Explicit esbuild build',
    command: 'npm run build:safe'
  },
  {
    name: 'Direct vite build with esbuild',
    command: 'npx vite build --minify esbuild'
  },
  {
    name: 'Build without minification',
    command: 'npx vite build --minify false'
  }
];

for (const attempt of buildAttempts) {
  console.log(`\n🧪 Trying: ${attempt.name}`);
  console.log(`Command: ${attempt.command}`);
  
  try {
    // Clean dist before each attempt
    if (fs.existsSync('dist')) {
      fs.rmSync('dist', { recursive: true });
    }
    
    execSync(attempt.command, { stdio: 'inherit' });
    
    // Check if build was successful
    if (fs.existsSync('dist/index.html')) {
      console.log(`\n🎉 SUCCESS! Build completed with: ${attempt.name}`);
      console.log(`✅ Files created in dist/`);
      
      const files = fs.readdirSync('dist');
      console.log(`📁 Build output: ${files.join(', ')}`);
      
      // Update package.json to use the working command
      console.log(`\n📝 Recommended build command: ${attempt.command}`);
      process.exit(0);
    }
  } catch (error) {
    console.log(`❌ Failed: ${error.message.split('\n')[0]}`);
  }
}

console.log('\n❌ All build attempts failed. Manual intervention required.');
console.log('\n🔍 Troubleshooting steps:');
console.log('1. Check if all dependencies are installed: npm install');
console.log('2. Try building without minification: npx vite build --minify false');
console.log('3. Check vite.config.js for any terser references');
console.log('4. Consider removing node_modules and reinstalling');

process.exit(1);
