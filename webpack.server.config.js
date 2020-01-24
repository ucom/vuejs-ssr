const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require("uglifyjs-3-webpack-plugin")
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
    // rules: [
    //   {
    //     test: /\.css$/,
    //     loader: 'css-loader',
    //     options: {
    //       modules: {
    //         localIdentName: '[local]_[hash:base64:8]',
    //       }
    //     }
    //   }
    // ]
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  }
})
module.exports = webpackConfig