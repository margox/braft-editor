var webpack = require('webpack')
  , merge = require('webpack-merge')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
  , path = require('path')
  , baseConfigs = require('./webpack.config.base')

module.exports = merge(baseConfigs, {
  context: path.join(__dirname, './src'),
  entry: {
    index: './index.jsx'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'braft.js',
    publicPath: '/'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'draft-js': 'draft-js',
    'draft-convert': 'draft-convert',
    'react-color': 'react-color',
    'draftjs-utils': 'draftjs-utils'
  },
  plugins: [
    new ExtractTextPlugin("braft.css"),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /.css$/,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  ]
})
