//<input type="date" class="form-control datepicker" ng-model="currentItem.OrderDate" />
(function () {
    //---Jquery IU required---//
    angular.module('directives').directive('mmDatepicker', function () {
        return {
            restrict: 'C',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {

                $(function () {
                    $(element).datepicker({
                        dateFormat: 'yy/mm/dd',
                        format: "dd/mm/yyyy",
                        todayBtn: "linked",
                        onSelect: function (date) {
                            ngModelCtrl.$setViewValue(date);
                            scope.$apply();
                        }
                    });
                    
                    function toDate(dateStr) {
                        var parts = dateStr.split("/");
                        return new Date(parts[2], parts[1] - 1, parts[0]);
                    }

                    attrs.$observe('ngModel', function (value) {
                        scope.$watch(value, function (newValue,oldValue) { 
                            if (newValue) {
                                if (newValue.getMonth) {
                                    if (!oldValue) {
                                        $(element).datepicker("setDate", ngModelCtrl.$viewValue);
                                    } else {
                                        olddate = new Date(oldValue);
                                        if (olddate.getMonth && (newValue.toUTCString() != olddate.toUTCString())) {
                                            $(element).datepicker("setDate", ngModelCtrl.$viewValue);
                                        }
                                    }
                                } else {
                                    var dt = toDate(ngModelCtrl.$viewValue)
                                    if (dt.getMonth) {
                                        ngModelCtrl.$setViewValue(dt);//ngmodel will be changed and  $watch will trigirred
                                    }
                                }
                                
                            }
                        });
                    });
                });
            }
        };
    });
})();