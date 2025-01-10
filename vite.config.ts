import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@main': path.resolve(__dirname, './src/main'),
      '@presentation': path.resolve(__dirname, './src/presentation'),
    },
  },
})
