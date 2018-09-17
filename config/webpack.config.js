const path = require('path');
const objectRestPlugin = require('@babel/plugin-proposal-object-rest-spread');
const classPropertiesPlugin = require('@babel/plugin-proposal-class-properties');

const ENTRY_PATH = path.resolve(__dirname, '../src/index.ts');
const DIST_PATH = path.resolve(__dirname, '../dist/');
const DIST_FILENAME = 'bundle.js';

module.exports = {
  entry: ENTRY_PATH,
  output: {
    path: DIST_PATH,
    filename: DIST_FILENAME,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            plugins: [objectRestPlugin, classPropertiesPlugin],
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
            plugins: [objectRestPlugin, classPropertiesPlugin],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.ts', '.tsx'],
  },
};
