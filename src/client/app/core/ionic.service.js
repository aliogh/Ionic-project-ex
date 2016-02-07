(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('ionicService', ionicService);

    function ionicService($ionicPlatform) {
        var service = {
            initialize: initialize
        };

        return service;

        function initialize() {
            $ionicPlatform.ready(function() {
              // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
              // for form inputs)
              if (window.cordova && window.cordova.plugins.Keyboard) {
                  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                  cordova.plugins.Keyboard.disableScroll(true);
              }

              if (window.StatusBar) {
                  // org.apache.cordova.statusbar required
                  StatusBar.styleDefault();
              }
          });
        }
    }
})();
