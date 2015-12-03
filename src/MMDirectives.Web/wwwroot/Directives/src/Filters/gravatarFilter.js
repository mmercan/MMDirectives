(function () {
    angular.module('data').filter('gravatarfilter', ["gravatarService", function (gravatarService) {
        return function (input) {
            var result = gravatarService(input);
            var content = result;
            return result;
        }
    }]);
})();