'use strict';

angular
.module('moApp.log')
.directive('moLog', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/src/log/log.view.html',
        controller: 'LogController',
        controllerAs: 'vm'
    };
});