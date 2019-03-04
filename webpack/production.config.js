'use strict';

const merge = require("webpack-merge");
const common = require("./common.config.js");

// minify bundled css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// minify bundled js
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "none",
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [ { loader: "ts-loader" } ]
      }
    ]
  }
});
