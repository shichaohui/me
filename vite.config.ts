import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: '/',
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
            @import '@/style/variables.scss'; 
            @import '@/style/base.scss'; 
            @import '@/style/mixins.scss';
            @import '@/style/element-plus.scss';
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
      ElementPlus({
        useSource: true,
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      VueComponents({
        resolvers: [ElementPlusResolver()],
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
  }
})
