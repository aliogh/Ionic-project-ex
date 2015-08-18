(function() {
    'use strict';

    angular
        .module('app.search')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.search',
                config: {
                    url: '/search',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/features/search/search.html'
                        }
                    }
                }
            }
        ];
    }
})();
