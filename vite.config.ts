import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import UnoCSS from "unocss/vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { resolve } from "path"

export default defineConfig({
  base: "/",
  plugins: [
    vue(),
    vueJsx({
      babelPlugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-transform-class-properties"],
      ],
    }),
    UnoCSS(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
      dts: "types/auto-import.d.ts",
    }),
    Components({
      dts: "types/components.d.ts",
    }),
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
