const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

const DIR_SOURCE = '_site';

gulp.task('build', ['minify_css', 'minify_html'], () => {
});

gulp.task('minify_css', () => {
    return gulp.src(`${DIR_SOURCE}/**/*.css`)
        .pipe(cleanCSS())
        .pipe(gulp.dest(DIR_SOURCE));
});

gulp.task('minify_html', function() {
    return gulp.src(`${DIR_SOURCE}/**/*.html`)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(DIR_SOURCE));
});


// gulp.task('concat', function () {
//     return gulp.src('public/css/dev/**/*.css')
//         .pipe(concatCss("main.min.css"))
//         .pipe(gulp.dest('public/css/concat/'));
// });
//
// gulp.task('csso', function () {
//     return gulp.src('public/css/concat/main.min.css')
//         .pipe(csso())
//         .pipe(gulp.dest('public/css/'));
// });

//
// let gulp = require('gulp');
// let cleanCSS = require('gulp-clean-css');
//
// gulp.task('minify-css', () => {
//     return gulp.src('styles/*.css')
//         .pipe(cleanCSS({compatibility: 'ie8'}))
//         .pipe(gulp.dest('dist'));
// });