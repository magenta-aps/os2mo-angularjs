'use strict';

angular
.module('moApp.organisation')
.controller('EndOrganisationController', EndOrganisationController);

function EndOrganisationController($rootScope, $mdDialog, organisationService) {
    var vm = this;
    var org = organisationService.getSelectedOrganisation();

    vm.endDate = '';
    vm.endOrgUnit = endOrgUnit;
    vm.cancelDialog = cancelDialog;

    function cancelDialog() {
        $mdDialog.cancel();
    }

    function endOrgUnit() {
        var date = moment(vm.endDate).format('DD-MM-YYYY');
        organisationService.endOrgUnit(org.org, org.uuid, date).then(function(response) {
            $rootScope.$broadcast('refresh-org-unit-detail');
            cancelDialog();
        });
    }
}