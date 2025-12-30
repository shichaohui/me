import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import svgLoader from 'vite-svg-loader'
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
        resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
      }),
      Components({
        dirs: [],
        resolvers: [
          ElementPlusResolver({ importStyle: 'sass' }),
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
    ],
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          additionalData: `
          @use '@/styles/variables.scss' as *;
          @use '@/styles/element-plus/variables.scss' as *;
          @use '@/styles/mixins/mixins.scss' as *;
        `,
        },
      },
    },
  }
})
