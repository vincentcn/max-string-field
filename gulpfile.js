'use strict';
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const gulpSequence = require('gulp-sequence');


// -----------------------------------------------------------------------------
// getTask() loads external gulp task script functions by filename
// -----------------------------------------------------------------------------
function getTask(task) {
	return require('./tasks/' + task)(gulp, plugins);
}

// -----------------------------------------------------------------------------
// Task: Compile : Scripts, Sass, EJS, All
// -----------------------------------------------------------------------------
gulp.task('compile:sass', getTask('compile.sass'));


// -----------------------------------------------------------------------------
//  Task: Default (compile source, start server, watch for changes)
// -----------------------------------------------------------------------------
gulp.task('default', function (cb) {
	gulpSequence('compile:sass')(cb);
});
