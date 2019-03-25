'use strict';

const APP_DIR = process.env.APP_DIR || "/myapp";
var src = APP_DIR;
var dist = APP_DIR + "/public/packs";
var glob = require("glob");

var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var ManifestPlugin = require('webpack-manifest-plugin');
var webpack = require('webpack');

module.exports = {
  context: src,
  entry: {
    "bundlejs": "./app/assets/javascripts/entrypoints/sandbox.ts",
    "bundlecss": "./app/assets/stylesheets/sandbox.scss",
    "images": glob.sync("./app/assets/images/**/*"),
    "linkButtons": "./app/assets/javascripts/entrypoints/linkButtons",
  },
  output: {
    path: dist,
    filename: "bundle-[name]-[hash].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 3 } },
          'postcss-loader',
          'resolve-url-loader',
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|jpe?g|png|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../[path][name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle-[name]-[hash].css'
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
      publicPath: '/packs/',
      writeToFileEmit: true
    }),
    new webpack.ContextReplacementPlugin(
      /moment[/\\]locale$/,
      /ja/
    )
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          reuseExistingChunk: true
        },
        lib: {
         test:  /app\/assets\/javascripts\/lib[\\/]/,
          name: 'lib',
          chunks: 'all',
          reuseExistingChunk: true
        }
      }
    }
  }
};
