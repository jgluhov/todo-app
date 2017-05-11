var path = require('path'),
  webpack = require('webpack'),
  webpackCommon = require('./webpack.common.js'),
  webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webpackCommon, {
  devtool: "inline-source-map",

  output: {
    path: path.resolve(__dirname, '..', "dist"),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    })
  ]
});
