(function() {
    'use strict';

    angular
        .module('app.browse')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.browse',
                config: {
                    url: '/browse',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/options/browse/browse.html'
                        }
                    }
                }
            }
        ];
    }
})();
