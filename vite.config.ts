import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import UnoCSS from "unocss/vite"
import { resolve } from "path"
import px2viewport from "postcss-px-to-viewport-8-plugin"

export default defineConfig({
  base: "/",
  plugins: [vue(), vueJsx(), UnoCSS()],
  server: {
    host: "0.0.0.0",
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src/") },
      { find: "/#", replacement: resolve(__dirname, "types/") },
    ],
  },
  css: {
    postcss: {
      plugins: [
        px2viewport({
          viewportWidth: 375, // 设计稿的视口宽度
          unitPrecision: 6, // 单位转换后保留的精度
        }),
      ],
    },
  },
})
