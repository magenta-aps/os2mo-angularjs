'use strict';

angular
.module('moApp.organisation')
.controller('CreateOrganisationController', CreateOrganisationController);

function CreateOrganisationController($rootScope, $mdDialog, organisationService) {
    var vm = this;

    vm.unit = {};
    vm.locations = {
        'primaer': true
    };
    vm.channels = {};
    vm.orgUnitTypes = [];
    vm.contactTypes = [];
    vm.contactProperties = [];

    vm.cancelDialog = cancelDialog;
    vm.createOrgUnit = createOrgUnit;
    vm.searchForAddress = searchForAddress;

    activate();

    function activate() {
        organisationService.getOrgUnitTypes().then(function(response) {
            vm.orgUnitTypes = response;
        });

        organisationService.getContactTypes().then(function(response) {
            vm.contactTypes = response;
        });

        organisationService.getContactProperties().then(function(response) {
            vm.contactProperties = response;
        });
    }

    function cancelDialog() {
        $mdDialog.cancel();
    }

    function searchForAddress(query) {
        console.log(query);
        return organisationService.getGeographicalLocation(query).then(function(response) {
            return response;
        });
    }

    function createOrgUnit() {
        //TODO: make these hardcoded variables go away
        vm.unit['user-key'] = 'NULL';
        vm.unit.org = '456362c4-0ee4-4e5e-a72c-751239745e62';
        vm.unit.parent = '2874e1dc-85e6-4269-823a-e1125484dfd3';

        vm.unit['valid-from'] = moment(vm.unit['valid-from']).format('DD-MM-YYYY');
        // vm.unit['valid-to'] = moment(vm.unit['valid-to']).format('DD-MM-YYYY');
        vm.locations['contact-channels'] = [vm.channels];
        vm.unit.locations = [vm.locations];

        console.log(vm.unit);

        organisationService.createOrgUnit(vm.unit).then(function(response) {
            $rootScope.$broadcast('refresh-org-tree');
            cancelDialog();
        });
    }
}