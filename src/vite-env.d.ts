/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AfghanSaffron_FrontEnd/'
})

// Fix Swiper CSS imports (TypeScript)
declare module "swiper/css" {
  const content: string;
  export default content;
}

declare module "swiper/css/effect-fade" {
  const content: string;
  export default content;
}

declare module "swiper/css/navigation" {
  const content: string;
  export default content;
}

declare module "swiper/css/pagination" {
  const content: string;
  export default content;
}

// Optional: Allow all .css imports
declare module "*.css" {
  const content: string;
  export default content;
}