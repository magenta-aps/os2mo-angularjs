'use strict';

angular
.module('moApp.searchBar')
.directive('searchBar', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/src/shared/directives/searchBar/searchBar.view.html',
        controller: 'SearchBarController',
        controllerAs: 'vm'
    };
});