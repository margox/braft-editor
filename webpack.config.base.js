var path = require('path')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  module: {
    //加载器配置
    rules: [
      { 
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract([
          'css-loader',
          'sass-loader'
        ])
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
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
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 12000,
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
  }
}