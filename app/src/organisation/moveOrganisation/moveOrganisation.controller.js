'use strict';

angular
.module('moApp.organisation')
.controller('MoveOrganisationController', MoveOrganisationController);

function MoveOrganisationController($mdDialog, organisationService) {
    var vm = this;
    var org = organisationService.getSelectedOrganisation();

    vm.cancelDialog = cancelDialog;
    vm.move = {};

    function cancelDialog() {
        $mdDialog.cancel();
    }

    function moveOrgUnit() {
        organisationService.moveOrgUnit(org.org, org.parent,vm.move.parent,vm.move.date).then(function(response) {
            cancelDialog();
        });
    }
}