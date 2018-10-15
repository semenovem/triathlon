const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const imagemin = require('gulp-imagemin');
// const uglify = require('gulp-uglify');

// var through = require('through2');
// const pngquant = require('imagemin-pngquant');

// const dotenv = require('dotenv');
// import dotenv from 'dotenv';

const SOURCE = '_site';
const TARGET = '_dist';
const EXCEPTION_PATH = ['!refs/**/*', '!libs/**/*'];

const PATCH = {
  javascript: makeSource(['**/*.js'].concat(EXCEPTION_PATH)),
  images: makeSource(['**/*.png', '**/*.jpg', '**/*.jpeg'].concat(EXCEPTION_PATH)),
  css: makeSource(['**/style.css', '404.htmlstyle.css', 'css/**/*.css'].concat(EXCEPTION_PATH)),
  html: makeSource(['**/index.html', '**/404.html'].concat(EXCEPTION_PATH)),
  move: makeSource(['libs/**/*', 'css/fonts/**/*', 'CNAME', '**/*.svg']),
};

function makeSource(a) {
  return a.map(pp => {
    const p = pp.trim();

    return (p[0] === '!' ? `!${SOURCE}/${p.slice(1)}` : `${SOURCE}/${p}`).replace(/\/{2,}/, '/');
  })
}


gulp.task('build', ['clean-target', 'move', 'css', 'html', 'javascript', 'img']);


// tasks
gulp.task('clean-target', () => del.sync(TARGET));
gulp.task('move', () => gulp.src(PATCH.move, { base: SOURCE }).pipe(gulp.dest(TARGET)));

gulp.task('css', () => (
  gulp.src(PATCH.css, { base: SOURCE })
    .pipe(cleanCSS())
    .pipe(gulp.dest(TARGET))
));

gulp.task('html', () => (
  gulp.src(PATCH.html, { base: SOURCE })
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true, minifyJS: true }))
    .pipe(gulp.dest(TARGET))
));

gulp.task('javascript', () => (
  gulp.src(PATCH.javascript, { base: SOURCE })
    .pipe(gulp.dest(TARGET))
));



gulp.task('img', () => {
  return gulp.src(PATCH.images)
    .pipe(imagemin())
    .pipe(gulp.dest(TARGET));
});
