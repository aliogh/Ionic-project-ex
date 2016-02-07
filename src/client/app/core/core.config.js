(function () {
    'use strict';

    var core = angular.module('app.core');

    var config = {
        appTitle: 'app-ionic',
        appErrorPrefix: '[app-ionic Error] ',
        version: '1.0.0'
    };

    core.value('config', config);

    core.config(configure);

    /* @ngInject */
    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider, $httpProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});

        $httpProvider.interceptors.push('myHttpInterceptor');
    }
})();
