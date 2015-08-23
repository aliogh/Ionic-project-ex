(function () {
    'use strict';

    angular
        .module('app.core', [
            'app.browse',
            'app.login',
            'app.menu',
            'app.playlists',
            'app.search',
            'ionic',
            'blocks.exception', 'blocks.logger', 'blocks.router'
        ])
        .run(runBlock);

    /* @ngInject */
    function runBlock(ionicService) {
        ionicService.initialize();
    }
})();
