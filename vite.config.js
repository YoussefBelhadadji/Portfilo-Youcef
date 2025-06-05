import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfilo-Youcef/', // هذا هو اسم الريبو في GitHub
  plugins: [react()],
})

