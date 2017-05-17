var path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/app",
    vendor: "./src/vendor"
  },

  output: {
    filename: "[name].js"
  },

  module: {
    noParse: [
      /[\/\\]node_modules[\/\\]angular[\/\\]angular\.js$/,
      /[\/\\]node_modules[\/\\]angular-route[\/\\]angular\.js$/,
      /[\/\\]node_modules[\/\\]jquery[\/\\]dist[\/\\]jquery\.js$/,
    ],

    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                'es2015',
                'stage-0'
              ]
            }
          },
          {
            loader: 'ng-annotate-loader',
            options: {
              add: false,
              map: false,
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?sourceMap'
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('[name].css')    
  ]
}
