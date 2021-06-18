const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './js/app.js',
  output: {
    filename: '[contenthash].js',
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
  devtool: 'cheap-source-map',
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
