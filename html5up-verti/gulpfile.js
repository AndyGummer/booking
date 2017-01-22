// 'use strict';

var os = require('os');
var gulp = require('gulp');
var open = require('gulp-open');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

// Default usage:
// Open one file with default application

gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open());
});
