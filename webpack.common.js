const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      shared: path.resolve(__dirname, 'src/shared/'),
      core: path.resolve(__dirname, 'src/core/'),
      features: path.resolve(__dirname, 'src/features/'),
      store: path.resolve(__dirname, 'src/store/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
