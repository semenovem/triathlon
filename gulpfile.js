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


gulp.task('test', () => {

  console.log('gulp test start')
// npm run-script build

// переключиться на ветку gh-pages
// git checkout gh-pages
// git reset --hard HEAD
// отчистить директорию, кроме скрытых и _dist

// перенести  файлы из _dist в ./   mv -r ./_dist/* ./
// перенести .gitignore   mv ./_dist/.gitignore ./
// git add .
// git commit -m 


  // git clone http://whatever.git -b branch-name
  // find * -not -path "_dist/*" -delete
});






/*
https://webdesign-master.ru/blog/tools/2016-03-09-gulp-beginners.html

---
---
скрипт депдлоя

ветка мастер, все изменения закомиченны
получим номер коммита
yarn build
checkout gh-pages
add _site

удалить все, кроме _site

git mv _site/* ./
rm -rf _site

commit -m 'номер коммита, с которого собрали'
push origin gh-pages

checkout -

*/
