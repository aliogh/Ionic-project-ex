(function() {
    'use strict';

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {});

    angular
        .module('app.menu')
        .controller('Menu', Menu);

    function Menu($scope, $controller, config) {
        $scope.version = config.version;

        var loginViewModel = $scope.$new();

        $controller('Login', {$scope : loginViewModel});

        $scope.login = function () {
            loginViewModel.login();
        };
    }
})();
