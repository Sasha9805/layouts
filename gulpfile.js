const { src, dest, series, parallel, watch } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

function minifyCSS() {
  return src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie7'}))
    .pipe(dest('dist/css'));
}

function transferFonts() {
  return src('src/fonts/**/*')
    .pipe(dest('dist/fonts'));
}

function transferJS() {
  return src('src/js/main.js')
    .pipe(dest('dist/js/'));
}

function transferPHP() {
  return src('server.php')
    .pipe(dest('dist/'));
}

function minifyHTML() {
  return src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(dest('dist/'));
}

function compressImages() {
  return src('src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'V6lb5vfCDdh7L8097LDtqv4cvP5Y2XJw'
    }))
    .pipe(dest('dist/img/'));
}

exports.build = parallel(minifyHTML, minifyCSS, compressImages, transferFonts, transferJS, transferPHP);