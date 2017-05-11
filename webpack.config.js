var path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: {
    vendor: "./src/vendor",
    app: "./src/app"
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: [
            'es2015'
          ]
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor']
    })
  ],

  devtool: "inline-source-map"
}
