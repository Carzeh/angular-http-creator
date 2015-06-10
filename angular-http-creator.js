(function () {

    angular.module('ngHttpCreator', []);

})();

(function () {

    // @ngInject
    function HTTPCreator($http, $q) {
        return {
            get: function (route, params) {

                return $q.when($http.get(route, {params: params}))
                    .then(function(success) {
                        return success.data;
                    });

            },
            post: function (route, data) {

                return $q.when($http.post(route, data))
                    .then(function(success) {
                        return success.data;
                    });

            },
            put: function (route, data) {

                return $q.when($http.put(route, data))
                    .then(function(success) {
                        return success.data;
                    });
            }
        };
    }

    angular.module('ngHttpCreator')
        .factory('HTTPCreator', HTTPCreator)

})();

