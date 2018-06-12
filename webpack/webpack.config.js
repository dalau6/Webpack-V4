const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.(css|scss)$/,
      use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ["file-loader"]
    }]
  },
  plugins: [new CleanWebpackPlugin("dist", {}), new MiniCssExtractPlugin({
    filename: "style.css"
  }), new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
  })]
}