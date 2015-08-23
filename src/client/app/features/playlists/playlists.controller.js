(function() {
    'use strict';

    angular
        .module('app.playlists')
        .controller('PlaylistsController', PlaylistsController);

    function PlaylistsController($scope, PlaylistsService) {
        var vm = this;

        activate();

        function activate() {
            PlaylistsService.getPlaylists()
                .then(function(data) {
                    vm.playlists = data;
                });
        }

        $scope.doRefresh = function() {
            PlaylistsService.getPlaylists()
                .then(function(data) {
                    vm.playlists = data;
                })
                .finally(function() {
                    // Stop the ion-refresher from spinning
                    $scope.$broadcast('scroll.refreshComplete');
                });
        };
    }
})();
