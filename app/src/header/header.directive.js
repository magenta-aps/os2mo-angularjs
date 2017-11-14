'use strict';

angular
.module('moApp.header')
.directive('moHeader', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/src/header/header.view.html',
        controller: 'HeaderController',
        controllerAs: 'vm'
    };
});