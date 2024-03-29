'use strict';

angular
    .module('moApp', [
        'ngSanitize',
        'ngMaterial',
        'ngMessages',
        'material.wizard',
        'ui.router',
        'rt.encodeuri',
        'ngResource',
        'pdf',
        'isteven-multi-select',
        'moApp.init',
        'moApp.translations.init',
        'moApp.header',
        'moApp.dashboard',
        'moApp.searchBar',
        'moApp.organisation',
        'moApp.employee',
        'moApp.administration',
        'moApp.systemsettings',
        'moApp.common.directives',
        'moApp.common.directives.filter',
        'moApp.errors',
        'moApp.sidebarTools',
        'moApp.organisationTree',
        'moApp.log',
        'dcbImgFallback',
        /*DO NOT REMOVE MODULES PLACEHOLDER!!!*/ //openDesk-modules
        /*LAST*/
        'moApp.translations'
    ]) // TRANSLATIONS IS ALWAYS LAST!
    .config(config)
    .run(function ($rootScope, $state, $mdDialog, APP_CONFIG) {
        angular.element(window.document)[0].title = APP_CONFIG.appName;
        $rootScope.appName = APP_CONFIG.appName;

        $rootScope.$on('$stateChangeStart', function (event, next, params) {
            $rootScope.toState = next;
            $rootScope.toStateParams = params;

            // If we got any open dialogs, close them before route change
            $mdDialog.cancel();
        });
    });

function config($mdThemingProvider, $stateProvider, $urlRouterProvider, $locationProvider, $mdDateLocaleProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('teal')
        .warnPalette('red');

    $urlRouterProvider
        .otherwise('/');

    $locationProvider.html5Mode(true);

    $mdDateLocaleProvider.firstDayOfWeek = 1;

    $mdDateLocaleProvider.formatDate = function (date) {
        if (date == undefined)
            return '';
        var day = ('0' + date.getDate()).slice(-2);
        var month = ('0' + (date.getMonth() + 1)).slice(-2);
        var year = date.getFullYear();

        return day + '/' + month + '/' + year;
    };

    $stateProvider.state('dashboard', {
            url: '/',
            views: {
                'content@': {
                    templateUrl: 'app/src/dashboard/view/dashboard.html',
                }
            },
            data: {}
        })
        .state('timemachine', {
            url: '/tidsmaskine',
            views: {
                'content@': {
                    templateUrl: 'app/src/timemachine/timemachine.view.html',
                }
            }
        })
        .state('help', {
            url: '/hjaelp',
            views: {
                'content@': {
                    templateUrl: 'app/src/help/help.view.html',
                }
            }
        });
}