'use strict';

angular
    .module('moApp.organisation')
    .controller('OrganisationDetailController', OrganisationDetailController);

function OrganisationDetailController($scope, $rootScope, $state, $mdDialog, organisationService) {
    var vm = this;
    var org = organisationService.getSelectedOrganisation();

    vm.organisation = {};
    vm.show = show;
    vm.showHistory = showHistory;
    vm.currentNavItem = 'unit';

    activate();

    function activate() {
        organisationService.getUnitDetails(org.org, org.uuid).then(function(response) {
            vm.organisation.unit = response;
        });
    
        organisationService.getLocationDetails(org.org, org.uuid).then(function(response) {
            vm.organisation.location = response;
        });

        organisationService.getContactDetails(org.org, org.uuid).then(function(response) {
            console.log(response);
            vm.organisation.contact = response;
        });
    }

    function show(detail) {
        $state.go('organisation.detail.' + detail);
    }

    function showHistory() {
        console.log('history');
        $rootScope.$broadcast('show-history');
    }
}