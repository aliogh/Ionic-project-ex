(function() {
    'use strict';

    angular
        .module('app.menu')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app',
                config: {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'app/features/menu/menu.html',
                    controller: 'MenuController'
                }
            }
        ];
    }
})();
