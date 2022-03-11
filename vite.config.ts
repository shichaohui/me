import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import VueComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/me',
  build: {
    outDir: 'dist/me',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: `
          @use '@/styles/vars/custom.scss' as *;
          @use '@/styles/vars/element-plus.scss' as *;
          @use '@/styles/mixins/mixins.scss' as *;
        `,
      },
    },
  },
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: '石朝辉（StoneHui）',
          description: '石朝辉（StoneHui）的个人网站',
          keywords: '石朝辉, StoneHui, Android, React, Vue, Flutter, Taro',
          author: 'StoneHui',
        },
      },
    }),
    VueComponents({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
})
