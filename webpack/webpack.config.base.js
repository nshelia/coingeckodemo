const path = require('path');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const isDev = process.env.NODE_ENV !== 'production'
const mainPath = (dir) => path.resolve(__dirname + '/../src/client/' + dir)

module.exports = {
  mode: isDev ? 'development' : 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({ terserOptions: { output: { comments: false } } }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      mainPath("js"),
      mainPath("sass"),
      mainPath("imgs"),
      mainPath("fonts")
    ],
    extensions: [".js", ".json"],
    alias: {
      "../../theme.config$": path.join(__dirname, "..", "/semantic-ui/theme.config"),
      "../semantic-ui/site": path.join(__dirname, "..", "/semantic-ui/site")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|svg|ico|ttf|woff|woff2|otf|eot|mp3)$/,
        loader: 'file-loader',
        options: {
          name: isDev ? '[name].[ext]' : '[name]-[hash].[ext]'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader?sourceMap',
          'resolve-url-loader',
          'sass-loader?sourceMap',
          'import-glob-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devtool: isDev ? 'inline-source-map' : false
}
