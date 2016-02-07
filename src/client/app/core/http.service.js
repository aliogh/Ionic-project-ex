(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('myHttpInterceptor', function($q) {
            return {
                request: function(config) {
                    // do something on success
                    return config;
                },

                requestError: function(rejection) {
                    // do something on error
                    /*if (canRecover(rejection)) {
                        return responseOrNewPromise
                    }*/
                    return $q.reject(rejection);
                },

                response: function(response) {
                    // do something on success
                    return response;
                },

                responseError: function(rejection) {
                    // do something on error
                    /*if (canRecover(rejection)) {
                        return responseOrNewPromise
                    }*/
                    return $q.reject(rejection);
                }
            };
        });
})();
