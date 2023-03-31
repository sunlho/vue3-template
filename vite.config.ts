import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import config from './src/config/index'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      dts: 'types/auto-import.d.ts'
    }),
    Components({
      dts: 'types/components.d.ts',
      resolvers: [NaiveUiResolver()]
    })
  ],
  server: {
    host: '0.0.0.0',
    base: config.base,
  },
  build: {
    outDir: config.outDir,
    assetsDir: config.outAssetsDir,
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src/') },
      { find: '#/', replacement: resolve(__dirname, 'types/') }
    ]
  }
})
