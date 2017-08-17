var webpack = require('webpack')
   , merge = require('webpack-merge')
   , path = require('path')
   , ExtractTextPlugin = require('extract-text-webpack-plugin')
   , HtmlWebpackPlugin = require('html-webpack-plugin')
   , baseConfigs = require('./webpack.config.base')

module.exports = merge(baseConfigs, {
  devtool: 'source-map',
  entry: {
    index : './example/index.jsx'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin("braft.css"),
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