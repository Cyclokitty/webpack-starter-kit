const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  // entry accepts a path or an object of entries
  // we'll be using the latter form gien it's
  // convenient by default so if a directory contains *index.js
  // it'll resolve to that.
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter Kit, mofos!',
    }),
    
  ],
};
