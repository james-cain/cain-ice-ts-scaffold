module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    port: 1575,
  }
}
