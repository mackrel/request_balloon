// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
 
// style.scssをタスクを作成する
gulp.task('default', function () {
  // style.scssファイルを取得
  gulp.src('sass/balloon.scss')
    // Sassのコンパイルを実行
    .pipe(sass())
    // webフォルダー以下に保存
    .pipe(gulp.dest('web'));
});