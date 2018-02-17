const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const imagemin = require('gulp-imagemin');
// const pngquant = require('imagemin-pngquant');

const SOURCE = '_site';
const TARGET = '_dist';

gulp.task('build', ['clean-target', 'minify-css', 'minify-html', 'img']);

gulp.task('minify-css', () => (
  gulp.src(`${SOURCE}/**/*.css`)
    .pipe(cleanCSS())
    .pipe(gulp.dest(TARGET))
));

gulp.task('minify-html', () => (
  gulp.src(`${SOURCE}/**/*.html`)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(TARGET))
));

gulp.task('transfer-assets', () => (
  gulp.src(`${SOURCE}/assets/**/*`)
    .pipe(gulp.dest(`${TARGET}/assets/`))
));

gulp.task('clean-target', () => {
  del.sync(TARGET);
});

gulp.task('img', () => {
  return gulp.src(`${SOURCE}/**/*`)
    .pipe(imagemin())
    .pipe(gulp.dest(TARGET));
});

/*
https://webdesign-master.ru/blog/tools/2016-03-09-gulp-beginners.html

*/
