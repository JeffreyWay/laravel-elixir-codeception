var Elixir = require('laravel-elixir');
var codecept = require('gulp-codeception');
var _ = require('underscore');
var runTests = require('laravel-elixir/tasks/shared/Tests')

/*
 |----------------------------------------------------------------
 | Codeception Testing
 |----------------------------------------------------------------
 |
 | This task will trigger your entire Codeception test suite and
 | will show notifications indicating the success or failure
 | of that test suite. It works great with the tdd task.
 |
 */

Elixir.extend('codeception', function(src, options) {
    src = src || 'tests';
    options = _.extend({
        clear: true,
        notify: true
    }, options);

    runTests({
        name: 'codeception',
        src: src + '/**/*+(Test|Cept|Cest).php',
        plugin: codecept,
        pluginOptions: options
    });
});
