const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '../env', '.env.local'),
});

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  cache: true,
  devServer: {
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false,
    port: dotenv.parsed.PORT,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
  ],
});
