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
    vm.formatDate = formatDate;

    $scope.$on('refresh-org-unit-detail', function() {
        activate();
    });

    activate();

    function activate() {
        organisationService.getUnitDetails(org.org, org.uuid).then(function(response) {
            vm.organisation.unit = response;
        });
    
        organisationService.getLocationDetails(org.org, org.uuid).then(function(response) {
            vm.organisation.location = response;
        });

        organisationService.getContactDetails(org.org, org.uuid).then(function(response) {
            vm.organisation.contact = response;
        });
    }

    function formatDate(date) {
        var d = moment(date).format('DD-MM-YYYY');
        return d != 'Invalid date' ? d : '';
    }

    function show(detail) {
        $state.go('organisation.detail.' + detail);
    }

    function showHistory() {
        $rootScope.$broadcast('show-history');
    }
}