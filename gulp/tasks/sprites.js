var gulp = require('gulp')
  , svgSprite = require('gulp-svg-sprite')
  , gulpRename = require('gulp-rename')
  , svg2png = require('gulp-svg2png')
  , del = require('del')
  ;

// Configuration options for the sprite builder tool
var sprite_lib_options = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
  	 css: {
      variables: {
        replaceSvgWithPng: function() {
          return function(sprite, render) {
            return render(sprite).split('.svg').join('.png');
          }
        }
      },
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
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

// Run 'gulp createSprite' at the command line, and it builds a single
// file with all of the icons in it:
// app/temp/sprite/css/svg/sprite.css-{random.num}.svg
// Then, we can use that instead of the icons, but you
// have to add size and offset parms onto the img src tags
// in the html file. and we can use another smart little plug-in
// to automate that task and then we developers do not have to.

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(sprite_lib_options))
    .pipe(gulp.dest('./app/temp/sprite/'))
         ;
});

gulp.task('createPngCopy', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.svg')
    .pipe(svg2png())
    .pipe(gulp.dest('./app/temp/sprite/css'))
         ;
});

gulp.task('copySpriteGraphic', ['createPngCopy'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
    .pipe(gulp.dest('./app/assets/images/sprites'))
        ;
});

gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(gulpRename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'))
         ;
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del('./app/temp/sprite');
});

//gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'copySpriteGraphic', 'copySpriteCSS']) ;
gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']) ;


