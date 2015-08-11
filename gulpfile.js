'use strict';
(function() {
    var gulp = require('gulp');
    var bower = require('bower');
    var sass = require('gulp-sass');
    var minifyCss = require('gulp-minify-css');
    var sh = require('shelljs');
    var vinylPaths = require('vinyl-paths');
    var del = require('del');
    var $ = require('gulp-load-plugins')({lazy: true});

    var paths = {
        sass: ['./scss/**/*.scss']
    };

    gulp.task('default', ['sass']);

    gulp.task('sass', function(done) {
        gulp.src('./scss/ionic.app.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./www/css/'))
        .pipe($.minifyCss({
            keepSpecialComments: 0
        }))
        .pipe($.rename({extname: '.min.css'}))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
    });

    gulp.task('watch', function() {
        gulp.watch(paths.sass, ['sass']);
    });

    gulp.task('install', ['git-check'], function() {
        return bower.commands.install()
        .on('log', function(data) {
            $.gutil.log('bower', $.gutil.colors.cyan(data.id), data.message);
        });
    });

    gulp.task('git-check', function(done) {
        if (!sh.which('git')) {
            console.log(
              '  ' + $.gutil.colors.red('Git is not installed.'),
              '\n  Git, the version control system, is required to download Ionic.',
              '\n  Download git here:', $.gutil.colors.cyan('http://git-scm.com/downloads') + '.',
              '\n  Once git is installed, run \'' + $.gutil.colors.cyan('gulp install') + '\' again.'
            );
            process.exit(1);
        }
        done();
    });

    gulp.task('copy-src', function() {
        return gulp.src('src/**/*')
          .pipe(gulp.dest('www'));
    });

    gulp.task('watch-src', ['copy-src'], function() {
        // Se crea un filtro para incluir todos los ficheros que son añadidos o modificados
        // Es decir, todos menos aquellos que son borrados ('unlink')
        var notDeletedFilter = $.filter(
          function(file) {
              return file.event !== 'unlink' && file.event !== 'unlinkDir';
          },
          {restore: true}
        );

        // El método restore obtiene los ficheros que no cumplen el filtro, es decir, los que
        // han sido borrados ('unlink') del origen, se pasan al pipe destino y se borran
        notDeletedFilter.restore
            .pipe(gulp.dest('www'))
            .pipe(vinylPaths(function(file, cb) {
                del(file, cb);
            }));

        // Se observan todos los ficheros de src/client y se copian aquellos que
        // son modificados o añadidos
        $.watch('src/**/*', {events: ['add', 'change', 'unlink', 'unlinkDir']})
            .pipe(notDeletedFilter)
            .pipe(gulp.dest('www'));
    });

    gulp.task('jscs-fix', function () {
        $.run('jscs src/js gulpfile.js  --fix').exec()
          .on('error', function() {
        });
    });
})();
