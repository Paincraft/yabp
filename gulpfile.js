var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var install = require('gulp-install');
var ts = require('gulp-typescript');
var del = require('del');

var path = {
  frontend : 'frontend/**/*',
  backend : 'backend/**/*',
  frontendFiles: ["frontend/index.html", "frontend/typings.json","frontend/typings/**/*"],
  backendFiles: ["tsconfig.json"]
};

var base = {base: './'};

var tsConfigFront = ts.createProject('frontend/tsconfig.json',{noExternalResolve: false});
var tsConfigBack = ts.createProject('backend/tsconfig.json',{noExternalResolve: false});

//common
gulp.task('clean', function (end) {
  del.sync('../dist/**/*',{force: true});
  end()
});


//frontend
gulp.task('jade',['clean'], function() {
  var LOCALS = {};
  gulp.src([path.frontend + '.jade',path.excluded_frontend], base)
    .pipe(jade({
      locals: LOCALS
    }))
    .pipe(gulp.dest('../dist'))
});

gulp.task('sass',['clean'], function () {
  gulp.src([path.frontend + '.sass',path.excluded_frontend],base)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../dist'));
});

gulp.task('ts-front',['clean'], function (end) {
	var result = tsConfigFront.src(base).pipe(ts(tsConfigFront));
  result.js.pipe(gulp.dest('../dist/frontend')).on('end',function(){
    end();
  });
});

gulp.task('front-copy-files',['clean','ts-front'], function (end) {
  gulp.src(path.frontendFiles,base).pipe(gulp.dest('../dist')).on('end',function(){
    end();
  });
});

gulp.task('front-install',['clean','ts-front'], function () {
  gulp.src('frontend/package.json',base).pipe(gulp.dest('../dist')).on('end',function(){
    setTimeout(function(){
      gulp.src('../dist/frontend/package.json',base).pipe(install());
    }, 500);
  });
});

//backend
gulp.task('ts-back',['clean'], function (end) {
  var result = tsConfigBack.src(base).pipe(ts(tsConfigBack));
  result.js.pipe(gulp.dest('../dist'));
  end();
});

gulp.task('back-copy-files',['clean','ts-back'], function (end) {
  gulp.src(path.backendFiles,base).pipe(gulp.dest('../dist')).on('end',function(){
    end();
  });
});

gulp.task('back-install',['clean','ts-back'], function () {
  gulp.src('backend/package.json',base).pipe(gulp.dest('../dist')).on('end',function(){
    setTimeout(function(){
      gulp.src('../dist/backend/package.json',base).pipe(install());
    }, 1000);
  });
});


//run
gulp.task('watch', function() {
  gulp.watch(path.templates, ['jade','sass','ts-front','ts-back']);
});

gulp.task('default', ['watch','clean','ts-front','ts-back','front-copy-files','back-copy-files','back-install','front-install']);
