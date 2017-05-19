
var gulp      = require('gulp')
  , brsync    = require('browser-sync').create()
  , watch     = require('gulp-watch')
  , webpack   = require('webpack')
  ;

gulp.task('watch', function(){
  console.log("./gulp/tasks/watch.js - starting watch");
  brsync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function(){
    console.log("./gulp/tasks/watch.js - calling browser-sync.reload");
    brsync.reload();
  });

  watch('./app/assets/styles/**/*.css', function(){
    console.log("./gulp/tasks/watch.js - calling gulp.start('injectCSS')");
    gulp.start('injectCSS');
  });

  /* watch all of the JavaScripts. */
  watch('./app/assets/scripts/**/*.js', function(){
    console.log("./gulp/tasks/watch.js - calling gulp.start('scriptsRefresh')");
    /* A JavaScript file has changed. Run another task
       (see below) which has its own dependencies,
       including the scripts (see scripts.js)... */
    gulp.start('scriptsRefresh');
  });

  console.log("gulp.task - stopping");
});

// --------------------------------------------
// name this injectCSS, or anything you want...
// it will feed the "main" styles.css file to
// the browsers... somehow...
// when temp/styles/styles.css changes...
gulp.task('injectCSS', ['styles'], function(){
  console.log("./gulp/tasks/watch.js - calling gulp.src('./app/temp/styles/styles.css').pipe(brsync)");
  return gulp.src('./app/temp/styles/styles.css')
      .pipe(brsync.stream())
      ;
});

gulp.task('scriptsRefresh', ['scripts'], function() {
    brsync.reload();
});


