import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import UnoCSS from "unocss/vite"
import { resolve } from "path"

export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
  ],
  server: {
    host: "0.0.0.0",
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "src/") },
      { find: "/#", replacement: resolve(__dirname, "types/") },
    ],
  },
})
