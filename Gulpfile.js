'stric mode';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

// TASKS

// SASS
gulp.task('sass', () =>
  gulp.src('./assets/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./assets/css'));
);
// SASS
gulp.task('sass:watch', () =>
  gulp.watch('./assets/sass/*.scss'. ['sass']);
);
// AUTOPREFIXER
gulp.task('autoprefixer', () =>
  gulp.src('./assets/css/style.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./assets/css/style.css'));
);
// IMAGEMIN
gulp.task('images', () =>
  gulp.src('./imagens/*.svg')
  .pipe(imagemin())
  .pipe(gulp.dest('./assets/img'));
);
// PRODUÇÂO
gulp.task('prod', ['autoprefixer', 'images']);
