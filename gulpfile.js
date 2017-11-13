var gulp = require('gulp'),
        $ = require('gulp-load-plugins')(),
        fs = require('fs');

var paths = {
    scripts: ['app/src/**/*.module.js', 'app/src/**/*.js', '!app/src/**/*Spec.js', '!app/src/modules/test/**/*.js', '!app/src/modules/**/tests/**/*.js'],
    scss: ['app/src/app.scss', 'app/src/**/*.scss'],
    e2e_tests: ['app/tests/e2e/**/*test.js', 'app/src/modules/**/*test.js'],
    protractorConfigFile: 'app/tests/e2e/conf.js'
};

var dist = {
    name: 'angular-stub',
    folder: './dist/'
};

var environment = {
    local: {
        repo: 'http://localhost:8080',
    },
    staging: {
        repo: 'http://staging.openDesk.dk:8080',
    }
};

/*
 * LOCAL WEBSERVER
 */

function createWebserver(config) {
    return gulp.src('./')
        .pipe($.webserver({
            open: false, // Open up a browser automatically
            host: '0.0.0.0', // hostname needed if you want to access the server from anywhere on your local network
            fallback: 'index.html',
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
                next();
            },
            proxies: [{
                source: '/alfresco',
                target: config.repo + '/alfresco'
            }]
        }));
}


// Script tasks
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
            .pipe($.wrap('(function(){\n"use strict";\n<%= contents %>\n})();'))
            //.pipe($.jshint('.jshintrc'))
            //.pipe($.jshint.reporter('jshint-stylish'))
            .pipe($.concat(dist.name + '.js'))
            .pipe($.change(includeAppConfigParams))
            .pipe(gulp.dest(dist.folder))
            .pipe($.rename({suffix: '.min'}))
            .pipe($.stripDebug())
            .pipe($.ngAnnotate())
            .pipe($.uglify())
            .pipe(gulp.dest(dist.folder))
            .on('error', $.util.log);
});

// Css
gulp.task('css', function() {
    return gulp.src(paths.scss)
            .pipe($.wrap('/** ---------------- \n * Filepath: <%= file.relative %>\n */\n<%= contents %>'))
            .pipe($.concat(dist.name + '.scss'))
            .pipe($.sass())
            .pipe(gulp.dest(dist.folder))
            .pipe($.rename({suffix: '.min'}))
            .pipe($.minifyCss())
            .pipe(gulp.dest(dist.folder))
            .on('error', $.util.log);
});

// UI-test
gulp.task('e2e-tests', function() {
    gulp.src(paths.e2e_tests)
            .pipe($.protractor.protractor({
                configFile: paths.protractorConfigFile
            }))
            .on('error', function(e) {
                throw e;
            });
});

function includeAppConfigParams(content) {
    var argv = require('yargs').argv;
    if (argv.title) {
        content = content.replace("appName: 'angular-stub'", "appName: '" + argv.title + "'");
    }
    return content;
}

// Set up watchers
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.scss, ['css']);
});

/** ----------------
 * Gulp runner tasks
 * (tasks to run from the CLI)
 */

/*
 * This task is used to just build the scripts and css.
 * Useful if you want to deploy to production (e.g. with Apache).
 */
gulp.task('build', ['scripts', 'css']);

/* Tests */
gulp.task('ui-test', ['e2e-tests']);

/*
 Running '$ gulp' is equal to running '$ gulp build watch'
 In other words, the default task is the 'build' and 'watch' task
 */
gulp.task('default', ['build', 'watch']);


gulp.task('demo', ['build', 'watch'], function () {
    createWebserver(environment.demo);
});

gulp.task('local', ['build', 'watch'], function () {
    createWebserver(environment.local);
});