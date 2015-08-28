/**
 * Lanza las pruebas e2e (es necesario que esté publicada la aplicación)
 */
module.exports = function (gulp) {
    'use strict';

    var protractor = require('gulp-protractor').protractor;

    return function() {
        gulp.src(['./src/client/test/e2e/*.js'])
          .pipe(protractor({
              configFile: 'protractor.conf.js'
          }))
          .on('error', function(e) { throw e; });
    };
};
