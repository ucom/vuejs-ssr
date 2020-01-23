var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var UglifyJsPlugin = require("uglifyjs-3-webpack-plugin")
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const nodeExternals = require('webpack-node-externals');

var baseConfig = require('./webpack.base.config.js')

var webpackConfig = merge(baseConfig, {
  target: 'node',
  entry: './src/server-entry.js',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whitelist: /\.css$/,
  }),
  plugins: [
    new VueSSRServerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[local]_[hash:base64:8]',
          }
        }
      }
    ]
  }
})
module.exports = webpackConfig