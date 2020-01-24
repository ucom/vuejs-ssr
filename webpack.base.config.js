var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var UglifyJsPlugin = require("uglifyjs-3-webpack-plugin")
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isProduction = process.env.NODE_ENV === 'production';

let config = {
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: isProduction
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ]
}

if (isProduction) {
  config = merge(config, {
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin(), new UglifyJsPlugin()],
    },
  });
}

module.exports = config;



rules: [
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader'],
          options:{
            modules: {
                localIdentName: '[local]_[hash:base64:8]',
              },
          }
        }
      ]