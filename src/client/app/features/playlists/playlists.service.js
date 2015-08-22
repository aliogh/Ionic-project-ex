(function() {
    'use strict';

    angular
        .module('app.playlists')
        .factory('PlaylistsService', factory);

    function factory($http) {
        var playlists;

        var service = {
            getPlaylists: getPlaylists
        };

        function getPlaylists() {
            return $http.get('/playlists').
                then(function(response) {
                    playlists = response.data;
                    return playlists;
                });
        }

        return service;
    }
})();
