'use strict';

angular
.module('moApp.sidebarTools')
.directive('sidebarTools', function () {
    return {
        restrict: 'E',
        scope: {
            tools: '=moTools'
        },
        templateUrl: 'app/src/shared/directives/sidebarTools/sidebarTools.view.html',
        controller: 'SidebarToolsController',
        controllerAs: 'vm'
    };
});