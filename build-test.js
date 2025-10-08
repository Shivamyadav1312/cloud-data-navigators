#!/usr/bin/env node

/**
 * Build Test Script
 * Tests different build configurations to find the working one
 */

import { execSync } from 'child_process';
import fs from 'fs';

console.log('🧪 Testing Build Configurations...\n');

const buildCommands = [
  {
    name: 'Standard Build with esbuild',
    command: 'npx vite build --minify esbuild'
  },
  {
    name: 'Production Build with esbuild',
    command: 'npx vite build --mode production --minify esbuild'
  },
  {
    name: 'Build without minification',
    command: 'npx vite build --minify false'
  },
  {
    name: 'Build with SWC only',
    command: 'npx vite build --mode production --minify false'
  }
];

for (const build of buildCommands) {
  console.log(`🔨 Testing: ${build.name}`);
  console.log(`Command: ${build.command}`);
  
  try {
    // Clean previous build
    if (fs.existsSync('dist')) {
      fs.rmSync('dist', { recursive: true });
    }
    
    // Try the build
    execSync(build.command, { stdio: 'inherit' });
    
    // Check if build succeeded
    if (fs.existsSync('dist/index.html')) {
      console.log(`✅ SUCCESS: ${build.name} worked!`);
      console.log(`📦 Build output created in dist/`);
      
      // List build files
      const files = fs.readdirSync('dist');
      console.log(`📁 Files created: ${files.join(', ')}`);
      
      console.log(`\n🎉 WORKING BUILD COMMAND: ${build.command}`);
      process.exit(0);
    } else {
      console.log(`❌ FAILED: ${build.name} - no output files`);
    }
  } catch (error) {
    console.log(`❌ FAILED: ${build.name}`);
    console.log(`Error: ${error.message.split('\n')[0]}`);
  }
  
  console.log('---\n');
}

console.log('❌ All build configurations failed. Check the errors above.');
process.exit(1);
