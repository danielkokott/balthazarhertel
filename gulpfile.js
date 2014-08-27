var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;


gulp.task('default', ['serve']);


gulp.task('serve', function () {
  browserSync({
    notify: false,
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['*'], reload);
  // gulp.watch(['app/styles/**/*.scss'], ['styles:components', 'styles:scss']);
  // gulp.watch(['app/scripts/**/*.js'], ['jshint']);
  // gulp.watch(['app/images/**/*'], reload);
});
