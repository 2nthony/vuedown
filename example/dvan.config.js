const path = require('path')

module.exports = {
  entry: './index.js',
  chainWebpack(config) {
    config.module
      .rule('vuedown')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vuedown-loader')
      .loader(path.join(__dirname, '../loader'))
  }
}
