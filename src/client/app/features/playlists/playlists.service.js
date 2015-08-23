(function() {
    'use strict';

    angular
        .module('app.playlists')
        .factory('PlaylistsService', factory);

    function factory($http) {
        var service = {
            getPlaylists: getPlaylists
        };

        function getPlaylists() {
            return $http.get('/playlists').
                then(function(response) {
                    return response.data;
                });
        }

        return service;
    }
})();
