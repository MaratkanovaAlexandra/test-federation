import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext'
  },
  plugins: [
    vue(),
    federation({
      name: 'remote-app',
      filename: 'remote.js',
      exposes: {
          './Button': './src/Button.vue',
      },
      shared: ['vue']
    })
  ],
});
