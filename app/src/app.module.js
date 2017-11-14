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
        'moApp.search',
        'moApp.administration',
        'moApp.systemsettings',
        'moApp.common.directives',
        'moApp.common.directives.filter',
        'moApp.errors',
        'moApp.sidebarTools',
        'dcbImgFallback',
        /*DO NOT REMOVE MODULES PLACEHOLDER!!!*/ //openDesk-modules
        /*LAST*/ 'moApp.translations'])// TRANSLATIONS IS ALWAYS LAST!
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

function config($mdThemingProvider, $stateProvider, $urlRouterProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('yellow')
        .warnPalette('deep-orange');

    $urlRouterProvider
        .otherwise('/');

    $stateProvider.state('site', {
        abstract: true,
        resolve: {},
        views: {
            'footer@': {
                templateUrl: 'app/src/footer/view/footer.html',
                controller: 'FooterController'
            }
        }
    }).state('dashboard', {
        parent: 'site',
        url: '/',
        views: {
            'content@': {
                templateUrl: 'app/src/dashboard/view/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm'
            }
        },
        data: {}
    }).state('search', {
        parent: 'site',
        url: '/search/:searchTerm',
        views: {
            'content@': {
                templateUrl: 'app/src/search/view/search.html'
            }
        },
        data: {}
    });
}