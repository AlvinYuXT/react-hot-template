const webpack = require('webpack')
const path = require('path')


module.exports = {
  devtool: 'cheap-module-eval-source-map',//打包构建信息
  entry: [

    'babel-polyfill',//for IE
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',//webpack服务连接到浏览器接收更新

    './app/main.js'
  ],


  output: {
    filename: '[name].bundle.js',
    publicPath: '/dist/js/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
}
