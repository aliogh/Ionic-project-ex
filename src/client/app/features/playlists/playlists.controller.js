(function() {
    'use strict';

    angular
        .module('app.playlists')
        .controller('PlaylistsController', PlaylistsController);

    function PlaylistsController(PlaylistsService) {
        var vm = this;

        PlaylistsService.getPlaylists().then(function(data) {
            vm.playlists = data;
        });
    }
})();
