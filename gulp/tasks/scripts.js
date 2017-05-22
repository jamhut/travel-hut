var gulp = require('gulp')
  , webpack = require('webpack')
  ;

gulp.task('scripts', function(callback) {
 console.log("./gulp/tasks/scripts.js - telling webpack to process ../../webpack.config.js");
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if (err) {
    	console.log(err.toString());
    }
    console.log("./gulp/tasks/scripts.js - calling callback");
    console.log(stats.toString());
    callback();
  });
});
