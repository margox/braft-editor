var path = require('path')

module.exports = {
  module: {
    //加载器配置
    rules: [
      { 
        test: /\.(scss|css)$/,
        exclude: [path.resolve(__dirname, './src/assets')],
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
            // options: {
            //   modules: true,
            //   camelCase: true,
            //   importLoaders: 1,
            //   localIdentName: '[local]-[hash:base64:6]'
            // }
          }, {
            loader: 'postcss-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      }, { 
        test: /\.(scss|css)$/,
        include: [path.resolve(__dirname, './src/assets')],
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'postcss-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader']
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
  }
}