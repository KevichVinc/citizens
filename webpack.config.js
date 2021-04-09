const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'index.jsx'),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './static'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|jpg|png|ttf)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devServer: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
    port: 3000,
    contentBase: path.resolve(__dirname, './'),
    hot: true,
    historyApiFallback: true,
  },
};
