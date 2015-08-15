(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        var otherwise = 'app/playlists';
        routerHelper.configureStates([], otherwise);
    }
})();
