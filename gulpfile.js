const { src, dest } = require('gulp');

function cssTransfer() {
  return src('src/css/*.css')
  .pipe(dest('dist/css'));
}

exports.cssTransfer = cssTransfer;