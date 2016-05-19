'use strict';

var gulp = require('gulp'),
    d3Bundler = require('./gulp-tasks/d3-bundler.js');

gulp.task('default', d3Bundler);
