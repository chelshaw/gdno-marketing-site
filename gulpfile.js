'use strict';

var gulp = require('gulp');
var gss = require('gulp-shopify-sass');
var rename = require('gulp-rename');

gulp.task('styles', function() {
	return gulp.src('./stylesheets/main.scss')
		.pipe(gss())
		.pipe(rename('theme.scss.liquid'))
		.pipe(gulp.dest('./assets'));
});
