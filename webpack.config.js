const path = require('path');

module.exports = {
  entry: {
      'legacy-polyfills': path.resolve(__dirname, './src/js/legacy-polyfills.js')
    },
  output: {
    filename: 'atd-[name].js',
    path: path.resolve(__dirname, './dist/js')
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          }
      ]
  }
};