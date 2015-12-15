/// <reference path="../wwwroot/typings/tsd.d.ts" />
var app;
(function (app) {
    function configState($stateProvider, $urlRouterProvider, $compileProvider) {
        // Optimize load start with remove binding information inside the DOM element
        $compileProvider.debugInfoEnabled(true);
        // Set default state
        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider
            .state('dashboard', {
            url: "/dashboard",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/dashboard.html",
            data: {
                pageTitle: 'Dashboard',
            }
        })
            .state('mmActionModal', {
            url: "/mmActionModal",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmActionModal.html",
            data: {
                pageTitle: '',
            }
        })
            .state('mmScroll', {
            url: "/mmScroll",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmScroll.html",
            data: {
                pageTitle: '',
            }
        })
            .state('mmSelectionModal', {
            url: "/mmSelectionModal",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmSelectionModal.html",
            data: {
                pageTitle: '',
            }
        })
            .state('mmSelectionModalAjax', {
            url: "/mmSelectionModalAjax",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmSelectionModalAjax.html",
            data: {
                pageTitle: '',
            }
        })
            .state('popover', {
            url: "/popover",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/popover.html",
            data: {
                pageTitle: '',
            }
        }).state('tooltip', {
            url: "/tooltip",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/tooltip.html",
            data: {
                pageTitle: '',
            }
        })
            .state('validationText', {
            url: "/validationText",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/validationText.html",
            data: {
                pageTitle: '',
            }
        }).state('mmwizard', {
            url: "/mmwizard",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmwizard.html",
            data: {
                pageTitle: '',
            }
        }).state('mainMenuCommands', {
            url: "/mainMenuCommands",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mainMenuCommands.html",
            data: {
                pageTitle: '',
            }
        }).state('pageAlerts', {
            url: "/pageAlerts",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/pageAlerts.html",
            data: {
                pageTitle: '',
            }
        }).state('toastrAlerts', {
            url: "/toastrAlerts",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/toastrAlerts.html",
            data: {
                pageTitle: '',
            }
        }).state('modals', {
            url: "/modals",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/modals.html",
            data: {
                pageTitle: '',
            }
        })
            .state('mmChart', {
            url: "/mmChart",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmChart.html",
            data: {
                pageTitle: '',
            }
        }).state('mmDropZone', {
            url: "/mmDropZone",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmDropZone.html",
            data: {
                pageTitle: '',
            }
        }).state('mmFileRead', {
            url: "/mmFileRead",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmFileRead.html",
            data: {
                pageTitle: '',
            }
        }).state('mmFullcalendar', {
            url: "/mmFullcalendar",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmFullcalendar.html",
            data: {
                pageTitle: '',
            }
        }).state('mmMap', {
            url: "/mmMap",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmMap.html",
            data: {
                pageTitle: '',
            }
        }).state('mmSortable', {
            url: "/mmSortable",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmSortable.html",
            data: {
                pageTitle: '',
            }
        })
            .state('mmTableSorter', {
            url: "/mmTableSorter",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmTableSorter.html",
            data: {
                pageTitle: '',
            }
        }).state('mmtable', {
            url: "/mmtable",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmtable.html",
            data: {
                pageTitle: '',
            }
        }).state('mmTimeline', {
            url: "/mmTimeline",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmTimeline.html",
            data: {
                pageTitle: '',
            }
        }).state('mmTreeview', {
            url: "/mmTreeview",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmTreeview.html",
            data: {
                pageTitle: '',
            }
        }).state('PagerSource', {
            url: "/PagerSource",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/PagerSource.html",
            data: {
                pageTitle: '',
            }
        }).state('mmlist', {
            url: "/mmlist",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmlist.html",
            data: {
                pageTitle: '',
            }
        })
            .state('knob', {
            url: "/knob",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/knob.html",
            data: {
                pageTitle: '',
            }
        }).state('mmDatepicker', {
            url: "/mmDatepicker",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmDatepicker.html",
            data: {
                pageTitle: '',
            }
        }).state('mmHtml', {
            url: "/mmHtml",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmHtml.html",
            data: {
                pageTitle: '',
            }
        }).state('mmLimiter', {
            url: "/mmLimiter",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmLimiter.html",
            data: {
                pageTitle: '',
            }
        }).state('mmMask', {
            url: "/mmMask",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmMask.html",
            data: {
                pageTitle: '',
            }
        }).state('mmRating', {
            url: "/mmRating",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmRating.html",
            data: {
                pageTitle: '',
            }
        }).state('mmSelect2', {
            url: "/mmSelect2",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmSelect2.html",
            data: {
                pageTitle: '',
            }
        }).state('mmswitcher', {
            url: "/mmswitcher",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmswitcher.html",
            data: {
                pageTitle: '',
            }
        }).state('mmTinymce', {
            url: "/mmTinymce",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmTinymce.html",
            data: {
                pageTitle: '',
            }
        }).state('timePicker', {
            url: "/timePicker",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/timePicker.html",
            data: {
                pageTitle: '',
            }
        }).state('mmHttpGet', {
            url: "/mmHttpGet",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmHttpGet.html",
            data: {
                pageTitle: '',
            }
        }).state('mmLocalstorage', {
            url: "/mmLocalstorage",
            controller: "directiveCtrl",
            controllerAs: "vm",
            templateUrl: "/Directives/templates/mmLocalstorage.html",
            data: {
                pageTitle: '',
            }
        });
        //<li><a href="#" data- toggle="tab" > Bootstrap X- Editable http://vitalets.github.io/x-editable/ </a></li>
    }
    angular.module("app", ["directives", "component", "data", 'ui.router', 'ui.bootstrap',])
        .config(configState)
        .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
})(app || (app = {}));
//# sourceMappingURL=app.js.map