(function() {
    'use strict';

    angular
        .module('app', [
            'app.core',
            'mocks.playlists',
            'ngMockE2E'
        ])
        .run(function($httpBackend) {
            $httpBackend.whenGET(/^.*\.html$/).passThrough();
        });
})();
