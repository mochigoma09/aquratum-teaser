import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ViteImageOptimizer({
    //   png: {
    //     quality: 100,
    //   },
    //   jpeg: {
    //     quality: 100,
    //   },
    //   webp: {
    //     lossless: true,
    //   },
    // }),
  ],
  base: '/aquratum/',
})
