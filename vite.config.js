import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
  base: "./",
  server: {
    // Network, 局域网端口
    host: "0.0.0.0",
  },
  // resolve: 解决
  resolve: {
    // extensions: 扩展
    extensions: [".vue", ".js"],
  },
})
