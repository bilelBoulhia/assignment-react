import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react()],
  test:{
    environment:'jsdom',
    globals:true,
    setupFiles:'./tests/setup.js'
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
} as UserConfig)
