var gulp      = require('gulp')
  , brsync    = require('browser-sync').create()
  , watch     = require('gulp-watch')
  ;

gulp.task('watch', function(){
  console.log("gulp.task - starting");
  brsync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    console.log("gulp.task - calling browser sync reload");
    brsync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    console.log("gulp.task - starting injectCSS");
    gulp.start('injectCSS');
  });

  console.log("gulp.task - stopping");
});

// --------------------------------------------
// name this injectCSS, or anything you want...
// it will feed the "main" styles.css file to
// the browsers... somehow...
// when temp/styles/styles.css changes...
gulp.task('injectCSS', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
      .pipe(brsync.stream())
      ;
});
