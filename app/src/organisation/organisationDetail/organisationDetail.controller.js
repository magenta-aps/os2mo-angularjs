'use strict';

angular
    .module('moApp.organisation')
    .controller('OrganisationDetailController', OrganisationDetailController);

function OrganisationDetailController($scope, $mdDialog, organisationService) {
    var vm = this;
    var org = organisationService.getSelectedOrganisation();

    vm.organisation = {};

    organisationService.getUnitDetails(org.org, org.uuid).then(function(response) {
        vm.organisation.unit = response;
    });
}