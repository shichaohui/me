const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

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
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons')) // icons存放地（svg放的地方）
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons')) // icons存放地（svg放的地方）
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}
