var gulp = require('gulp');
var jade = require('gulp-jade');

var path = {
  templates : 'front/templates_jade/**/*.jade'
};

gulp.task('templates', function() {
  var LOCALS = {};
  gulp.src(path.templates,{base: './front/templates_jade/'})
    .pipe(jade({
      locals: LOCALS
    }))
    .pipe(gulp.dest('./front/templates'))
});

gulp.task('watch', function() {
  gulp.watch(path.templates, ['templates']);
});

gulp.task('default', ['watch', 'templates']);
