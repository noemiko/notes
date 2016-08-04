var gulp        = require('gulp'),
	browserSync = require('browser-sync').create(),
	jshint = require('gulp-jshint'),
	reload = browserSync.reload;


gulp.task('serve', function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['*.html','views/*.html', 'css/*.css', 'js/*.js']).on("change", reload);
});

gulp.task('lint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

