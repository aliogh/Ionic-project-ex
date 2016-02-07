/**
 * Lanza las pruebas e2e (es necesario que esté publicada la aplicación)
 */
module.exports = function (gulp, plugins, config, args) {
    'use strict';

    var protractor = require('gulp-protractor').protractor;
    var log = require('./util/log');
    var errorHandler = require('./util/error-handler');

    var report = require('./e2e-report')(gulp);

    return function() {
        var timeout = 0;
        var protractorArgs;
        var port = 8100;
        var portStandAlone = 1234;

        if (args.standalone) {
            log('kill all ionic process');
            plugins.run('killall ionic').exec()
                .on('error', errorHandler('Ionic process could not be kill'));

            log('run ionic serve process');
            plugins.run('screen -d -m -L ionic serve --port ' + portStandAlone + ' --nolivereload --nobrowser').exec();

            protractorArgs = ['--baseUrl', 'http://127.0.0.1:' + portStandAlone + '?ionicplatform=android'];

            timeout = 5000;
            log('wait ' + String(timeout / 1000) + ' seconds until ionic server is running...');

            port = portStandAlone;
        }

        setTimeout(function () {
            log('start protactor to run e2e tests');

            gulp.src(['./src/client/test/e2e/features/*.feature'])
              .pipe(protractor({
                  configFile: './protractor.conf.js',
                  args: ['--baseUrl', 'http://127.0.0.1:' + port]
              }))
              .on('error', function() {})
              .on('end', function() {
                  report();
                  if (args.standalone) {
                      plugins.run('killall ionic').exec();
                  }
              });

        }, timeout);
    };
};
