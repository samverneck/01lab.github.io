'stric mode';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

// TASKS

// AUTOPREFIXER
gulp.task('autoprefixer', () =>
    gulp.src('assets/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('assets/css/'))
);
// IMAGEMIN
gulp.task('images', () =>
  gulp.src('imagens/*.svg')
  .pipe(imagemin())
  .pipe(gulp.dest('assets/img'))
);
