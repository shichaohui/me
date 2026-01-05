import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import svgLoader from 'vite-svg-loader'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('🧨mode 运行环境:', mode)
  return {
    base: '/me',
    build: {
      outDir: 'dist/me',
      sourcemap: true,
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue'],
        resolvers: [ElementPlusResolver({ importStyle: false })],
      }),
      Components({
        dirs: [],
        resolvers: [
          ElementPlusResolver({ importStyle: false }),
          IconsResolver({ prefix: 'icon', enabledCollections: ['ep'] }),
        ],
      }),
      Icons({ autoInstall: true }),
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
      svgLoader(),
      tailwindcss(),
    ],
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
  }
})
