(function() {
    'use strict';

    angular
        .module('app.menu')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        var otherwise = 'app/playlists';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: 'app',
                config: {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'app/layout/menu.html',
                    controller: 'Menu'
                }
            }
        ];
    }
})();
