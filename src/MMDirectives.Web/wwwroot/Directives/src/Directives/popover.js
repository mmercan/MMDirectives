angular.module("directives").directive("popover", [function () {
    return {
        restrict: 'ACM',
        link: function (scope, element) {
            $(element).popover(
                { trigger: 'focus' }
                );
        }
    }
}])