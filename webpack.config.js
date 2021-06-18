const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build', 'js'),
    publicPath: '/public/js',
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000,
    publicPath: '/public/js',
    watchContentBase: true,
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
