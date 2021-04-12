const baseConfig = require('./webpack.config.base.js')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')

const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '.env')
});

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  ...baseConfig,
  entry: {
    index: "./src/client/js/entry"
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: isDev ? "[name].bundle.js" : "[name]-[hash].bundle.js",
    chunkFilename: "[name]-[chunkhash].chunk.js",
    publicPath: '/'
  },
  target: "web",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Loading...',
      filename: 'index.html',
      template: './src/client/template/index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[hash].css'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
  ],
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    },
    host: '0.0.0.0',
    contentBase: path.resolve(__dirname, "build"),
    port: 3100,
    open: true,
    compress: true,
    https: false
  }
}
