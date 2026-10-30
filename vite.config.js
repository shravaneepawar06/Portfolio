import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' lets the build work on Netlify/Vercel (root) and GitHub Pages (sub-path).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: { manualChunks: { react: ['react', 'react-dom'] } },
    },
  },
})
