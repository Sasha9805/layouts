const path = require('path');

module.exports = {

  mode: 'development',

  entry: './src/js/script.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src/js/')
  }

};