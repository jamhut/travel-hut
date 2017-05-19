
var gulp      = require('gulp')
  , postcss   = require('gulp-postcss')
  , cssImport = require('postcss-import')
  , cssvars   = require('postcss-simple-vars')
  , nester    = require('postcss-nested')
  , mixins    = require('postcss-mixins')
  , hexrgba   = require('postcss-hexrgba')
  , prefxr    = require('autoprefixer')
  ;

gulp.task('styles', function(){
  console.log("rebuilding app/temp/styles/");
  return gulp.src('./app/assets/styles/styles.css')
      .pipe(postcss([cssImport, mixins, cssvars, nester, hexrgba, prefxr]))
                   /* if I make a mistake in my css files, do */
                   /* not let it kill my gulp watch-er task.  */
                   /* Remove the .toString() to see more      */
      .on('error', function(err_txt){
      	 console.log(err_txt.toString());
          this.emit('end');
        })

      .pipe(gulp.dest('./app/temp/styles'))
      ;
});

