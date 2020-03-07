const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CssProcessor = require('cssnano');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const baseConfigs = require('./webpack.base');

module.exports = merge(baseConfigs, {
  mode: 'production',
  devtool: 'source-map',
  context: path.join(__dirname, '../../src'),
  entry: {
    index: './index.jsx',
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: 'index.js',
    publicPath: '/',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'draft-js': 'draft-js',
    'draft-convert': 'draft-convert',
    'draftjs-utils': 'draftjs-utils',
    'braft-finder': 'braft-finder',
    'braft-utils': 'braft-utils',
    'braft-convert': 'braft-convert',
    immutable: 'immutable',
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /.css$/,
      cssProcessor: CssProcessor,
      sourceMap: true,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
        zindex: false,
        safe: true,
      },
    }),
  ],
});
