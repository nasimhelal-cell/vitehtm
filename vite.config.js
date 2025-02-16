import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "./src/styles/variables.scss" as *;
        `
      }
    }
  }
})