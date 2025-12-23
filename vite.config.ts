import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   resolve: {
    alias: {
      '@react-oauth/google': '@react-oauth/google/dist/index.js', // This might need adjustment
    },
  },
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/AfghanSaffron_FrontEnd/'
})
