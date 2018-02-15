const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const del = require('del');

const SOURCE = '_site';
const TARGET = '_dist';

gulp.task('build', ['clean-target', 'minify-css', 'minify-html', 'transfer-resources']);

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

gulp.task('transfer-resources', () => (
  gulp.src(`${SOURCE}/resources/**/*`)
    .pipe(gulp.dest(`${TARGET}/resources/`))
));

gulp.task('clean-target', () => {
  del.sync(TARGET);
});


/*
https://webdesign-master.ru/blog/tools/2016-03-09-gulp-beginners.html

*/