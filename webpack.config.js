const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
  entry: [
    `${APP_DIR}/index.jsx`
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: 'sourcemap',
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: APP_DIR,
      loader: 'babel-loader'
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader?sourceMap']
    },
    {
      test: /\.scss$/,
      loader: 'sass-loader',
      options: {
        includePaths: ['node_modules']
      }
    }]
  }
};

module.exports = config;
