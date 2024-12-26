import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        'node_modules/@fortawesome/fontawesome-free/webfonts',
        './', // Allow the project root folder
      ],
    },
  },
})
