(function () {
    'use strict';

    angular
        .module('app.core', [
            'ionic',
            'blocks.exception', 'blocks.logger', 'blocks.router'
        ])
        .run(runBlock);

    /* @ngInject */
    function runBlock(ionicService) {
        ionicService.initialize();
    }
})();
