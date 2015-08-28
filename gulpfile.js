(function() {
    'use strict';

    var args = require('yargs').argv;
    var config = require('./gulp.config')();
    var gulp = require('gulp');
    var plugins = require('gulp-load-plugins')({lazy: true});
    var gulpsync = require('gulp-sync')(gulp);

    function getTask(task) {
        return require('./gulp-tasks/' + task)(gulp, plugins, config, args);
    }

    gulp.task('default', ['help']);

    /**
     * List the available gulp tasks
     */
    gulp.task('help', plugins.taskListing);

    /**
     * vet the code and create coverage report
     */
    gulp.task('vet', getTask('vet'));

    /**
     * Corrige los errores detectados por jscs
     */
    gulp.task('jscs', getTask('jscs'));

    /**
     * Create a visualizer report
     */
    gulp.task('plato', getTask('plato'));

    /**
     * Run specs once and exit
     */
    gulp.task('test', ['vet', 'build-templatecache'], getTask('test'));

    /**
     * Run specs and wait.
     * Watch for file changes and re-run tests on each change
     */
    gulp.task('autotest', ['build-templatecache'], getTask('autotest'));

    /**
     * Build everything in config.build directory
     */
    gulp.task('build', gulpsync.sync(['test', 'clean', 'build-inject', 'build-fonts']), getTask('build'));

    /**
    * Compile sass to css
    */
    gulp.task('build-styles', ['clean-styles'], getTask('build-styles'));

    /**
     * Copy fonts
     */
    gulp.task('build-fonts', ['clean-fonts'], getTask('build-fonts'));

    /**
     * Create pluginstemplateCache from the html templates
     */
    gulp.task('build-templatecache', getTask('build-templatecache'));

    /**
     * Wire-up dependencies
     */
    gulp.task('build-inject', gulpsync.sync(['inject-wiredep', 'inject-jsAppDep', 'inject-styles']));

    /**
     * Wire-up the bower dependencies
     */
    gulp.task('inject-wiredep', getTask('inject-wiredep'));

    /**
     * Wire-up the js app dependencies
     */
    gulp.task('inject-jsAppDep', getTask('inject-jsAppDep'));

    /**
     * Wire-up the styles app dependencies
     */
    gulp.task('inject-styles', ['build-styles'], getTask('inject-styles'));

    /**
     * Optimized build
     */
    gulp.task('package', ['package-optimize'], getTask('package'));

    /**
     * Copia imagenes al directorio de empaquetado
     */
    gulp.task('package-fonts', getTask('package-fonts'));

    /**
     * Compress images
     */
    gulp.task('package-images', getTask('package-images'));

    /**
     * Optimize all files, move to a build folder, and inject them into the new index.html
     */
    gulp.task('package-optimize',
        gulpsync.sync(['test', 'clean', 'build-inject', 'build-fonts', 'package-fonts', 'package-images']),
        getTask('package-optimize'));

    /**
     * Empaqueta, comprime y sube a PhoneGap Build
     */
    gulp.task('dist', gulpsync.sync(['package', 'dist-zip', 'dist-upload']));

    /**
     * Comprime el paquete de la aplicación en dist
     */
    gulp.task('dist-zip', getTask('dist-zip'));

    /**
     * Upload ipa/apk to Testfairy
     */
    gulp.task('dist-upload', getTask('dist-upload'));

    /**
     * Realiza un build y pasa a observar cambios para re-build
     */
    gulp.task('watch', getTask('watch'));

    /**
     * Remove all files from the build, reports and dist folders
     */
    gulp.task('clean', getTask('clean'));

    /**
     * Remove all fonts from the client folder
     */
    gulp.task('clean-fonts', getTask('clean-fonts'));

    /**
     * Remove all styles from the client folder
     */
    gulp.task('clean-styles', getTask('clean-styles'));

    /**
     * Lanza las pruebas e2e (es necesario que esté publicada la aplicación)
     */
    gulp.task('e2e', getTask('e2e'));

})();
