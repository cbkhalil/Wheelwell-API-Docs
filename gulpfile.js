var gulp 			= require('gulp')
var inline 			= require('gulp-inline')
var jade 			= require('gulp-jade')
var minifyCSS 		= require('gulp-minify-css')
var uglify 			= require('gulp-uglify')



gulp.task('default', function() {
	gulp.src(['./client/*.jade'])
	.pipe(jade({
		locals: require('./api-docs.json'),
		doctype: 'html'
	}))
	.pipe(inline({
		js: uglify,
		css: minifyCSS
	}))
	.pipe(gulp.dest('./dist/'))
})

