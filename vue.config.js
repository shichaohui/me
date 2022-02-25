const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProduction ? '/me' : '/',
  outputDir: isProduction ? 'dist/me' : 'dist/local',
  productionSourceMap: !isProduction,
  chainWebpack: config => {
    // 修改页面标题 & SEO 优化
    config.plugin('html').tap(args => {
      args[0].title = '石朝辉（StoneHui）'
      args[0].description = '石朝辉（StoneHui）的个人网站'
      args[0].keywords = '石朝辉, StoneHui, Android, React, Vue, Flutter, Taro'
      args[0].author = 'StoneHui'
      return args
    })
    // 从 file-loader 的 svg 规则中删除 icons 目录，解决 svg-sprite-loader 无法加载 icons 的问题
    const svgRule = config.module.rule('svg')
    svgRule.exclude.add(path.join(__dirname, 'src/assets/icons')).end()
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: path.join(__dirname, 'src/assets/icons'),
          loader: 'svg-sprite-loader',
          options: { symbolId: 'icon-[name]' },
        },
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
      ],
    },
  },
}
