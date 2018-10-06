var merge = require('webpack-merge')
  , path = require('path')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin')
  , baseConfigs = require('./webpack.base')

module.exports = merge(baseConfigs, {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index : './playground/index.jsx'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new HtmlWebpackPlugin({
      template: './playground/index.html'
    })
  ],
  devServer: {
    stats: { chunks:false },
    contentBase: './playground',
    port: 5998,
    hot: true
  }
})