const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
/**
 * This is the Webpack configuration file for production.
 */

module.exports = {
  entry: './src/app.jsx',

  output: {
    path: __dirname + "/build/",
    filename: "app.js",
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],

  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],
  },
  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /(\.scss|\.css)$/,
      loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&\
 importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]\
 !postcss!sass?sourceMap!toolbox')
    }]
  },
  toolbox: {
    theme: path.join(__dirname, 'src/toolbox-theme.scss')
  },
  postcss: [autoprefixer]
};
