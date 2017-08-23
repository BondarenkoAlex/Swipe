const path = require('path');

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

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    }]
  }
};

module.exports = config;