(function() {
    'use strict';

    angular
        .module('app.playlists')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.playlists',
                config: {
                    url: '/playlists',
                    views: {
                        'menuContent': {
                            templateUrl: 'app/options/playlists/playlists.html',
                            controller: 'PlaylistsController'
                        }
                    }
                }
            },
            {
                state: 'app.single',
                config: {
                    url: '/playlists/:playlistId',
                    views: {
                      'menuContent': {
                          templateUrl: 'app/options/playlists/playlist.html',
                          controller: 'PlaylistController'
                      }
                  }
                }
            }
        ];
    }
})();
