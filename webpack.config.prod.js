var webpack = require('webpack')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
  , path = require('path')

module.exports = {
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
  module: {
    rules: [
      { 
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name]_[hash:6].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10,
              name: '[name]_[hash:6].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, './src'),
      path.join(__dirname, './node_modules')
    ],
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
      'sassinc': path.join(__dirname, './src/assets/scss/_inc.scss')
    },
    extensions: ['.js', '.jsx']
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
}
