const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    homepage: './src/homepage.js',
    navbar: './src/navbar.js',
    menu: './src/menu.js',
    contact: './src/contact.js'
  },
  devtool: 'inline-source-map',
  devServer: {
   contentBase: './dist',
 },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },
      {

        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: 'asset/resource',

      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};