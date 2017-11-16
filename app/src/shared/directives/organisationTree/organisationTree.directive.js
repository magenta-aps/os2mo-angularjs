'use strict';

angular
.module('moApp.organisationTree')
.directive('organisationTree', function () {
    return {
        restrict: 'E',
        scope: {
            orgUuid: "=moOrgUuid"
        },
        templateUrl: 'app/src/shared/directives/organisationTree/organisationTree.view.html',
        controller: 'OrganisationTreeController',
        controllerAs: 'vm'
    };
});