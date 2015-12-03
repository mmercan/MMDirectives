/// <reference path="../wwwroot/typings/tsd.d.ts" />

module app {

    function configState($stateProvider, $urlRouterProvider, $compileProvider) {

        // Optimize load start with remove binding information inside the DOM element
        $compileProvider.debugInfoEnabled(true);

        // Set default state
        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider
        // Dashboard - Main page
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "/Directives/templates/knob.html",
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
                templateUrl: "/Directives/templates/tooltip",
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
            }).state('mmswitcher', {
                url: "/mmswitcher",
                controller: "directiveCtrl",
                controllerAs: "vm",
                templateUrl: "/Directives/templates/mmswitcher.html",
                data: {
                    pageTitle: '',
                }
            }).state('mmTableSorter', {
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
            });



            //.state('', {
            //    url: "/",
            //    controller: "directiveCtrl",
            //    controllerAs: "vm",
            //    templateUrl: "/Directives/templates/",
            //    data: {
            //        pageTitle: '',
            //    }
            //})
      


        //< li class="dropdown" >
        //<a class="dropdown-toggle" data- toggle="dropdown" role= "button" aria- expanded="false" > inputs < span class="caret" > </span></a>
        //<ul class="dropdown-menu" role= "menu" >
        //<li><a href="#knob" data- toggle="tab" > knob < /a></li >
        //<li><a href="#mmDatepicker" data- toggle="tab" > mmDatepicker < /a></li >
        //<li><a href="#mmHtml" data- toggle="tab" > mmHtml < /a></li >
        //<li><a href="#mmLimiter" data- toggle="tab" > maxlength < /a></li >
        //<li><a href="#mmMask" data- toggle="tab" > mmMask < /a></li >
        //<li><a href="#mmRating" data- toggle="tab" > mmRating < /a></li >
        //<li><a href="#mmSelect2" data- toggle="tab" > mmSelect2 < /a></li >
        //<li><a href="#mmswitcher" data- toggle="tab" > mmswitcher < /a></li >
        //<li><a href="#mmTinymce" data- toggle="tab" > mmTinymce < /a></li >
        //<li><a href="#timePicker" data- toggle="tab" > Time Picker< /a></li >
        //<li><a href="#mmHttpGet" data- toggle="tab" > Bootstrap X- Editable http://vitalets.github.io/x-editable/ </a></li>
        //</ul>
        //< /li>
        //< li class="dropdown" >
        //<a class="dropdown-toggle" data- toggle="dropdown" role= "button" aria- expanded="false" > others < span class="caret" > </span></a>
        //<ul class="dropdown-menu" role= "menu" >
        //<li><a href="#mmLocalstorage" data- toggle="tab" > mmLocalstorage < /a></li >
        //<li><a href="#mmHttpGet" data- toggle="tab" > mmHttpGet < /a></li >
        //</ul>
        //< /li>



        //< li class="dropdown" >
        //<a class="dropdown-toggle" data- toggle="dropdown" role= "button" aria- expanded="false" > Dropdown < span class="caret" > </span></a>
        //<ul class="dropdown-menu" role= "menu" >
        //<li><a href="#knob" data- toggle="tab" > knob < /a></li >
        //<li><a href="#mmActionModal" data- toggle="tab" > mmActionModal < /a></li >
        //<li><a href="#mmChart" data- toggle="tab" > mmChart < /a></li >
        //<li><a href="#mmDatepicker" data- toggle="tab" > mmDatepicker < /a></li >
        //<li><a href="#mmDropZone" data- toggle="tab" > mmDropZone < /a></li >
        //<li><a href="#mmFileRead" data- toggle="tab" > mmFileUploader < /a></li >
        //<li><a href="#mmFullcalendar" data- toggle="tab" > mmFullcalendar < /a></li >
        //<li><a href="#mmHtml" data- toggle="tab" > mmFullcalendar < /a></li >
        //<li><a href="#mmLimiter" data- toggle="tab" > maxlength < /a></li >
        //<li><a href="#mmMap" data- toggle="tab" > mmMap < /a></li >
        //<li><a href="#mmMask" data- toggle="tab" > mmMask < /a></li >
        //<li><a href="#mmRating" data- toggle="tab" > mmRating < /a></li >
        //<li><a href="#mmScroll" data- toggle="tab" > mmScroll < /a></li >
        //<li><a href="#mmSelect2" data- toggle="tab" > mmSelect2 < /a></li >
        //<li><a href="#mmSelectionModal" data- toggle="tab" > mmSelectionModal < /a></li >
        //<li><a href="#mmSelectionModalAjax" data- toggle="tab" > mmSelectionModalAjax < /a></li >
        //<li><a href="#mmSortable" data- toggle="tab" > mmSortable < /a></li >
        //<li><a href="#mmswitcher" data- toggle="tab" > mmswitcher < /a></li >
        //<li><a href="#mmTableSorter" data- toggle="tab" > mmTableSorter < /a></li >
        //<li><a href="#mmtable" data- toggle="tab" > mmtable < /a></li >
        //<li><a href="#mmTimeline" data- toggle="tab" > mmTimeline < /a></li >
        //<li><a href="#mmTinymce" data- toggle="tab" > mmTinymce < /a></li >
        //<li><a href="#mmTreeview" data- toggle="tab" > mmTreeview < /a></li >
        //<li><a href="#PagerSource" data- toggle="tab" > PagerSource < /a></li >
        //<li><a href="#popover" data- toggle="tab" > popover < /a></li >
        //<li><a href="#tooltip" data- toggle="tab" > tooltip < /a></li >
        //<li><a href="#validationText" data- toggle="tab" > validationText < /a></li >
        //<li><a href="#mmLocalstorage" data- toggle="tab" > mmLocalstorage < /a></li >
        //<li><a href="#mmHttpGet" data- toggle="tab" > mmHttpGet < /a></li >
        //<li><a href="#timePicker" data- toggle="tab" > Time Picker< /a></li >
        //<li><a href="#mmwizard" data- toggle="tab" > Wizard < /a></li >
        //<li><a href="#mmHttpGet" data- toggle="tab" > Bootstrap X- Editable http://vitalets.github.io/x-editable/ </a></li>
        //<li><a href="#mainMenuCommands" data- toggle="tab" > Main Menu commands< /a></li >
        //<li><a href="#pageAlerts" data- toggle="tab" > Page Alerts< /a></li >
        //<li><a href="#toastrAlerts" data- toggle="tab" > Toastr Alerts< /a></li >
        //<li><a href="#modals" data- toggle="tab" > Modals < /a></li >
        //<li><a href="#mmlist" data- toggle="tab" > mmList < /a></li >
        //</ul>
        //< /li>
        //< /ul>

    }
    angular.module("app", ["directives", "component", "data", 'ui.router', 'ui.bootstrap',  ])
        .config(configState)
        .run(function ($rootScope, $state) {
            $rootScope.$state = $state;
        });

    
}