(function() {
    'use strict';

    angular
        .module('app.mocks')
        .run(function($httpBackend) {
            var playlists = [
              {title: 'Reggae', id: 1},
              {title: 'Chill', id: 2},
              {title: 'Dubstep', id: 3},
              {title: 'Indie', id: 4},
              {title: 'Rap', id: 5},
              {title: 'Cowbell', id: 6}
            ];

            for (var i = 0; i < 6; i++) {
                playlists = playlists.concat(playlists);
            }

            $httpBackend.whenGET('/playlists').respond(playlists);

            $httpBackend.whenPOST('/playlists').respond(function(method, url, data) {
                var playlist = angular.fromJson(data);
                playlists.push(playlist);
                return [200, playlist, {}];
            });
        });
})();
