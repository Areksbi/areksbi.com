const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const generatedPlugins = require('./config/bundle/webpack.generatedPlugins');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');
const assets = path.resolve(src, 'assets');

module.exports = {
  entry: path.resolve(src, 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            root: src,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.scss', '.js'],
    modules: ['node_modules', assets],
    alias: {
      '@images': path.resolve(assets, 'images/'),
      '@scripts': path.resolve(assets, 'scripts/'),
      '@src': src,
      '@styles': path.resolve(assets, 'styles/'),
      '@templates': path.resolve(assets, 'templates/'),
    },
  },
  output: {
    path: dist,
    publicPath: '/',
    filename: 'index.js',
  },
  plugins: [
    new CleanWebpackPlugin(dist),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CopyPlugin([
      {
        from: path.resolve(assets, 'fonts'),
        to: path.resolve(dist, 'assets', 'fonts'),
      },
      {
        from: path.resolve(assets, 'images'),
        to: path.resolve(dist, 'assets', 'images'),
      },
    ]),
    ...generatedPlugins(),
    new ScriptExtHtmlWebpackPlugin({
      defer: /\.js$/,
    }),
  ],
};
