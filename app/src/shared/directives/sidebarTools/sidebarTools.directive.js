'use strict';

angular
.module('moApp')
.directive('sidebarTools', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/src/shared/directives/sidebarTools/sidebarTools.view.html',
        controller: 'SidebarToolsController',
        controllerAs: 'vm'
    };
});