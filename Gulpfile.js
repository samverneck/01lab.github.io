'stric mode';

const gulp                  = require('gulp');
const htmlmin               = require('gulp-htmlmin');
const cleanCSS              = require('gulp-clean-css');
const autoprefixer          = require('gulp-autoprefixer');
const imagemin              = require('gulp-imagemin');
const surge                 = require('gulp-surge');

// TASKS

// HTMLMIN
gulp.task('minify:html', () =>
  gulp.src('*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('build/'))
);
// CleanCSS
gulp.task('minify:css', () =>
  gulp.src('assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/assets/css/'))
);
// AUTOPREFIXER
gulp.task('autoprefixer', () =>
    gulp.src('assets/css/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],casdeploycade: false
    }))
    .pipe(gulp.dest('assets/css/'))
);
// IMAGEMIN
gulp.task('images', () =>
  gulp.src('imagens/*.svg')
  .pipe(imagemin())
  .pipe(gulp.dest('build/assets/img'))
);
// SURGE (Deploy)
gulp.task('surge', () =>
  surge({
    project : 'build/',
    domain  : '01lab.surge.sh'
  })
);

// DEPLOY
gulp.task('deploy', ['images', 'autoprefixer', 'minify:html', 'minify:css', 'surge']);
