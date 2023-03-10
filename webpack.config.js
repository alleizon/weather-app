const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Weather App",
      template: "./dist/index.html",
      inject: false,
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
