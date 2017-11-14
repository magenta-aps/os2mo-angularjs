'use strict';

angular
.module('moApp.organisationTree')
.directive('organisationTree', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'app/src/shared/directives/organisationTree/organisationTree.view.html',
        controller: 'OrganisationTreeController',
        controllerAs: 'vm'
    };
});