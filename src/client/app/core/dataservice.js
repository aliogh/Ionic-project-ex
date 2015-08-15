(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception'];
    /* @ngInject */
    function dataservice($http, $q, exception) {
        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            return $http.get('/api/people')
                .then(success)
                .catch(failure);

            function success(response) {
                return response.data;
            }

            function failure(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }
    }
})();
