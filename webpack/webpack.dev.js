const path = require('path');
const merge = require('webpack-merge');
const {DefinePlugin} = require('webpack');
const dotenv = require('dotenv').config({path: path.join(__dirname, '../env/', '.env.dev')});
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    })
  ],
});
