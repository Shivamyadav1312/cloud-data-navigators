import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild', // Always use esbuild, never terser
    target: 'es2015',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-select']
        }
      }
    }
  },
  preview: {
    port: 8080,
    host: true
  },
  esbuild: {
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    drop: ['console', 'debugger']
  }
});
