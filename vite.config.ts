import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import tailwind from '@tailwindcss/vite'
import path from 'path'
import { imageOptimizer } from './vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [TanStackRouterVite(), react(), tailwind(), imageOptimizer()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
