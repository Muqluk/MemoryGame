const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.join(process.cwd(), 'src'),
  devtool: 'source-map',
  target: 'web',
  entry: { src: './main.jsx' },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].bundle.js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.es6', '.jsx', 'css', 'scss'],
    modules: [
      path.join(process.cwd(), 'src'),
      'node_modules',
      'react',
      'react-dom',
      'prop-types',
    ],
    alias: {
      Components: 'App/Components',
      css: 'App/Static',
      Pages: 'App/Pages',
      Store: 'App/Store',
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|es6|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        enforce: 'pre',
        test: /\.(js|es6|jsx)$/,
        loader: 'source-map-loader'
      },
      {
        test: /\.(js|es6|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
          sourceMaps: true
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(ttf|eot|svg|gif|ico|jpg|png|bmp)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  performance: false,
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      PropTypes: 'prop-types'
    }),
    new CleanWebpackPlugin({
      dry: false,
      verbose: false,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: true
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: { minifyJS: false }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
