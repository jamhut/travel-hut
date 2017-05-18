var gulp = require('gulp')
  , svgSprite = require('gulp-svg-sprite')
  , gulpRename = require('gulp-rename')
  , del = require('del')
  ;

// Configuration options for the sprite builder tool
var sprite_lib_options = {
  mode: {
  	 css: {
                                /* customize the output filename, */
      sprite: 'sprite.svg', /* which by default is more like  */
                                /* svg/sprite.css.abcd5678.svg    */
      render: {
        css: {
        	 /* This input "template" file tells how to set up */
        	 /* the output file on the gulp.dest() line below. */
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
} ;

gulp.task('beginClean', function() {
  del(['./app/temp/sprite', './app/assets/images/sprites']);
});

// Run 'gulp createSprite' at the command line, and it builds a single
// file with all of the icons in it:
// app/temp/sprite/css/svg/sprite.css-{random.num}.svg
// Then, we can use that instead of the icons, but you have to add
// size and offset parms onto the img src tags in the html file.

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(sprite_lib_options))
    .pipe(gulp.dest('./app/temp/sprite'))
         ;
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
   .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(gulpRename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'))
         ;
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  del(['./app/temp/sprite']);
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);


