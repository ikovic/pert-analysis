const path = require('path');

const ObjectRestPlugin = require('@babel/plugin-proposal-object-rest-spread');
const ClassPropertiesPlugin = require('@babel/plugin-proposal-class-properties');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ENTRY_PATH = path.resolve(__dirname, '../src/index.tsx');
const DIST_PATH = path.resolve(__dirname, '../dist/');
const HTML_TEMPLATE_PATH = path.resolve(__dirname, '../src/static/index.html');
const DIST_FILENAME = 'bundle.js';

const babelPlugins = [
  ['emotion', { sourceMap: true, autoLabel: true }],
  ObjectRestPlugin,
  ClassPropertiesPlugin,
];

module.exports = {
  entry: ENTRY_PATH,
  output: {
    path: DIST_PATH,
    filename: DIST_FILENAME,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: DIST_PATH,
  },
  plugins: [
    new CleanWebpackPlugin([DIST_PATH]),
    new HtmlWebpackPlugin({
      title: 'Estimation Tool',
      template: HTML_TEMPLATE_PATH,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            plugins: babelPlugins,
          },
        },
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
            plugins: babelPlugins,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.tsx'],
  },
};
