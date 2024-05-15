const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }]
  }
})