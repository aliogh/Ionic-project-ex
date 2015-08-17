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
                            templateUrl: 'app/features/playlists/playlists.html',
                            controller: 'Playlists'
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
                          templateUrl: 'app/features/playlists/playlist.html',
                          controller: 'Playlist'
                      }
                  }
                }
            }
        ];
    }
})();
