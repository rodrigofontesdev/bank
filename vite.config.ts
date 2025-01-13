import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@application': path.resolve(__dirname, './src/application'),
      '@domain': path.resolve(__dirname, './src/domain'),
      '@infra': path.resolve(__dirname, './src/infra'),
      '@main': path.resolve(__dirname, './src/main'),
      '@presentation': path.resolve(__dirname, './src/presentation'),
      '@test': path.resolve(__dirname, './src/test'),
    },
  },
})
