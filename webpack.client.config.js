const webpack = require('webpack');
const merge = require('webpack-merge');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const baseConfig = require('./webpack.base.config.js');
const isProduction = process.env.NODE_ENV === 'production';

let config = merge(baseConfig, {
	entry: './src/client-entry.js',
	plugins: [new VueSSRClientPlugin()],
	output: {
		path: path.resolve('./dist/'),
	  publicPath: '/dist/',
	  filename: '[name].[hash:8].js',
	},
	module: {
	    rules: [
	      {
	        test: /\.css$/,
	        use: [
	          isProduction ? MiniCssExtractPlugin.loader : 'vue-style-loader',
	          {
	            loader: 'css-loader',
	            options: {
	              modules: {
	                localIdentName: '[local]_[hash:base64:8]',
	              },
	            },
	          },
	        ],
	      },
	    ],
	},
});

if (!isProduction) {
  console.log('development mode')
  config = merge(config, {
    output: {
      filename: '[name].js',
      publicPath: 'http://localhost:9999/dist/',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: 'source-map',
    devServer: {
      clientLogLevel: 'debug',
      writeToDisk: true,
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: 'http://localhost:9999/dist/',
      hot: true,
      inline: true,
      historyApiFallback: true,
      port: 9999,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  });
} else {
  console.log('production mode')
  config = merge(config, {
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css',
      }),
    ],
  });
}

module.exports = config;