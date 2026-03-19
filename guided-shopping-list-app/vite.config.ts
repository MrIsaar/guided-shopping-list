import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      output: {
        entryFileNames: 'index.js', // Custom entry file name
        chunkFileNames: '[name].js', // Custom chunk file name
        assetFileNames: '[name].[ext]', // Custom asset file name
      },
    },
  },
})


