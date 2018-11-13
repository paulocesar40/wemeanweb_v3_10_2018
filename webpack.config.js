const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

//const ExtractTextPlugin = require("extract-text-webpack-plugin");

/*var isProd = process.env.NODE_ENV === "production"; //true or false
var cssDev = ["style-loader", "css-loader", "postcss-loader", "sass-loader"];
var cssProd = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: [
    {
      loader: ["css-loader", "postcss-loader", "sass-loader"]
    } 
    {
      loader: "postcss-loader"
    },
    {
      loader: "sass-loader"
    },
    {
      publicPath: "./dist"
    }
  ]
});
var cssConfig = isProd ? cssProd : cssDev;*/

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "We Mean Web",
      minify: {
        collapseWhitespace: false
      },
      filename: "index.html",
      template: "src/index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      path: __dirname + "/dist",
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    }),
    // new ExtractTextPlugin({
    //   filename: "[name].[hash].css",
    //   disable: !isProd,
    //   allChunks: true
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     use: cssConfig
      //   })
      // }
    ]
  }
};
