const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  {
    name: 'app',
    entry: {
      app: [
        'webpack-hot-middleware/client?name=app',
        './src/entry-app.js'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  },
  {
    name: 'app2',
    entry: {
      app2: [
        'webpack-hot-middleware/client?name=app2',
        './src/entry-app2.js'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist/app2'),
      publicPath: '/app2',
      filename: '[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
]
