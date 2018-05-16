const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const ENV = process.env.NODE_ENV;
const IS_PROD = ENV === 'production';

module.exports = {
  devServer: {
    compress: true,
    contentBase: [path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'public')],
    hot: true,
    host: '0.0.0.0',
    overlay: true,
    port: 3000
  },
  entry: './src/index.tsx',
  mode: IS_PROD ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        use: [
          IS_PROD ? MiniCSSExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
    publicPath: '/'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCSSExtractPlugin({
      filename: 'styles.css'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};
