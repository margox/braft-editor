var webpack = require('webpack')
   , merge = require('webpack-merge')
   , path = require('path')
   , HtmlWebpackPlugin = require('html-webpack-plugin')
   , baseConfigs = require('./webpack.config.base')

module.exports = merge(baseConfigs, {
  devtool: 'source-map',
  entry: {
    index : './example/index.jsx'
  },
  //入口文件输出配置
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    })
  ],
  devServer: {
    stats: { chunks:false },
    contentBase: './example',
    hot: true
  }
})