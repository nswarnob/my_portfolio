import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // ensure Vercel (or any CI) resolves index.html from project root
  root: '.',
  plugins: [react()],
})
