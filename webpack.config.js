const path = require('path');

module.exports = {

  mode: 'production',

  entry: './src/js/script.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src/js/')
  }

};