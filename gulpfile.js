var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var del = require('del');

var path = {
  frontend : 'frontend/**/*',
  backend : 'backend/**/*',
  excluded_frontend : '!frontend/node_modules',
  excluded_backend : '!backend/node_modules'
};

var base = {base: './'};

var tsConfigFront = ts.createProject('frontend/tsconfig.json',{noExternalResolve: false});
var tsConfigBack = ts.createProject('tsconfig-backend.json',{noExternalResolve: false});

gulp.task('clean', function () {
  return del('../dist/**/*',{force: true});
});

gulp.task('jade',['clean'], function() {
  var LOCALS = {};
  return gulp.src([path.frontend + '.jade',path.excluded_frontend], base)
    .pipe(jade({
      locals: LOCALS
    }))
    .pipe(gulp.dest('../dist'))
});

gulp.task('sass',['clean'], function () {
  return gulp.src([path.frontend + '.sass',path.excluded_frontend],base)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../dist'));
});

gulp.task('ts-front',['clean'], function () {
	var result = tsConfigFront.src().pipe(ts(tsConfigFront));
  return result.js.pipe(gulp.dest('../dist/frontend'));
});

gulp.task('ts-back',['clean'], function () {
  var result = tsConfigBack.src(base).pipe(ts(tsConfigBack));
  return result.js.pipe(gulp.dest('../dist'));
});

gulp.task('watch', function() {
  //gulp.watch(path.templates, ['jade','sass','ts-front','ts-back']);
});

gulp.task('default', ['watch','clean','ts-front']);
