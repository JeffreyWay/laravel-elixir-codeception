var _ = require('underscore');
var Elixir = require('laravel-elixir');
var codecept = require('gulp-codeception');
var runTests = require('laravel-elixir/tasks/shared/Tests');

var config = Elixir.config;

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
    config.testing.codeception = {
        path: 'tests',

        options: {
            clear: true,
            notify: true
        }
    };

    runTests({
        name: 'codeception',
        src: src || (config.testing.codeception.path + '/**/*+(Test|Cept|Cest).php'),
        plugin: codecept,
        pluginOptions: options || config.testing.codeception.options
    });
});

