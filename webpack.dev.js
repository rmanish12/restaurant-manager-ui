const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
      publicPath: '/'
    },
    port: 8080,
    client: {
      progress: true,
    },
    historyApiFallback: true,
    hot: true,
    open: true,
  }
})