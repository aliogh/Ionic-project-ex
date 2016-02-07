(function() {
    'use strict';

    angular
        .module('app.browse')
        .run(appRun);

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
                        menuContent: {
                            templateUrl: 'app/features/browse/browse.html'
                        }
                    }
                }
            }
        ];
    }
})();
