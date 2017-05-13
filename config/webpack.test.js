var webpackCommon = require('./webpack.common.js'),
  webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webpackCommon, {
  devtool: "inline-source-map"  
});
