import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [{
        name: 'copy-index-to-404',
        closeBundle() {
          copyFileSync('dist/index.html', 'dist/404.html')
        },
      }],
    },
  },
})
