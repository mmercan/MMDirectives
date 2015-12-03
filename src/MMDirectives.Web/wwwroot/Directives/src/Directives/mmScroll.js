angular.module('directives').directive("mmScroll", [
    "$http", "$compile", function($http, $compile) {
        return {
            restrict: 'CA',
            link: function (scope, element, attrs, ctrl, transclude) {
                var height = 300;
                var slim = false;
                attrs.$observe('slim', function (value) {
                    slim = true;
                    if (value) {
                        height = value;
                        try {
                            $(element).slimScroll({ height: height, alwaysVisible: true, color: '#888', allowPageScroll: true });
                        } catch (ex) {

                        }
                    }
                });

                attrs.$observe('mmScroll', function (value) {
                    if (!slim) {
                        if (value) {
                            height = value;
                            $(element).css("height", function (index) {
                                return height;
                            });
                        }
                        $(element).css("overflow-y", "scroll");
                    }
                });

                attrs.$observe('height', function (value) {
                    if (value) {
                        height = value;
                        $(element).css("height", function(index) {
                            return height;
                        });}});

                

                //$(element).css("height", function (index) {
                //    return height;
                //});

                // overflow-y: scroll; /* has to be scroll, not auto */

                $(element).css(" -webkit-overflow-scrolling", "touch");
               
                // style = "overflow-y: scroll; height:400px;"
               
            }
        }
    }
]);