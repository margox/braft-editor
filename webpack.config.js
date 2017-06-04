var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    index : './example/index.jsx'
  },
  //入口文件输出配置
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    //加载器配置
    rules: [
      { 
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader']
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
  //其它解决方案配置
  resolve: {
    modules: [path.join(__dirname, './src'), path.join(__dirname, './node_modules')],
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
      'sassinc': path.join(__dirname, './src/assets/scss/_inc.scss')
    },
    extensions: ['.js', '.jsx']
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
};