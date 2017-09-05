const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  devtool: 'cheap-inline-module-source-map',
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: "dist",
    port: 9002,
    historyApiFallback: true,
    hot: true,
    //host: '127.0.0.25',
  },

  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },

  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    }, {
      test: /\.css$/,
      exclude: /(node_modules)/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
              sourceMap: true,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      })
    }]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ]

};

module.exports = config;