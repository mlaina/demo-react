const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App.jsx',
  cache: false,
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './public/ico.png',
    }),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[chunkhash].bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
        include: '/src',
      },
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|ico|svg|gif|mp4)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[name].[ext]' },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
