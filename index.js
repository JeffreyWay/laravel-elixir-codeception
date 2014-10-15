var elixir = require('laravel-elixir');
var gulp = require('gulp');
var codecept = require('gulp-codeception');
var notify = require('gulp-notify');
var _ = require('underscore');

/*
 |----------------------------------------------------------------
 | Codeception Testing
 |----------------------------------------------------------------
 |
 | This task will trigger your entire Codeception test suite and
 | will show notifications indicating the success or failure
 | of that test suite. It's works great with the tdd task.
 |
 */

elixir.extend('codeception', function(baseDir, options) {

    baseDir = baseDir || 'tests';
    options = _.extend({
        clear: true, notify: true
    }, options);

    gulp.task('codeception', function() {
       gulp.src('')
           .pipe(codecept('', options))
           .on('error', notify.onError({
               title: 'Red!',
               message: 'Your Codeception tests failed!',
               icon: __dirname + '/../laravel-elixir/icons/fail.png'
           }))
           .pipe(notify({
               title: 'Green!',
               message: 'Your Codeception tests passed!',
               icon: __dirname + '/../laravel-elixir/icons/pass.png'
           }));
    });

    this.queueTask('codeception');

    this.registerWatcher('codeception', [
        baseDir + '/**/*+(Test|Cept|Cest).php',
        'app/**/*.php'
    ], 'tdd');

});

