import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, './frontend'),
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react', 'framer-motion']
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
            return 'images/[name].[hash][extname]'
          } else if (/\.css$/.test(name ?? '')) {
            return 'css/[name].[hash][extname]'
          }
          return 'assets/[name].[hash][extname]'
        }
      }
    },
    // Terser minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
      mangle: true,
      format: {
        comments: false,
      }
    },
    // Reporting
    reportCompressedSize: false,
  }
})
