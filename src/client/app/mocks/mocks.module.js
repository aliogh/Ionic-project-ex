(function() {
    'use strict';

    angular
        .module('app.mocks', [
            'ngMockE2E'
        ])
        .run(function($httpBackend) {
            $httpBackend.whenGET(/^.*\.html$/).passThrough();
        });
})();
