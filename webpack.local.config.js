const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context: __dirname,
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    './src/app.jsx',
  ],
  output: {
    path: __dirname + '/build/',
    filename: 'app.js',
    publicPath: 'http://localhost:9090/build/',
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules'),
    ],
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot', 'babel-loader?presets[]=es2015\
,presets[]=react,presets[]=stage-0,plugins[]=transform-runtime']
      },
{
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&\
importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]\
!postcss!sass?sourceMap!toolbox')
      }
    ]
  },
  toolbox: {
    theme: path.join(__dirname, 'src/toolbox-theme.scss')
  },
  postcss: [
    require('autoprefixer'), // Automatically include vendor prefixes
    require('postcss-nested'), // Enable nested rules, like in Sass
  ],
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
