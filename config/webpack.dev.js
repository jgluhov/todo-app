var path = require('path'),
  webpack = require('webpack'),
  webpackCommon = require('./webpack.common.js'),
  webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webpackCommon, {
  devtool: "inline-source-map",

  output: {
    path: path.resolve(__dirname, '..', "dist"),
    publicPath: 'http://localhost:3000'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dist'),
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    stats: 'minimal'
  }
});
