'use strict';

angular
.module('moApp.organisation')
.controller('MoveOrganisationController', MoveOrganisationController);

function MoveOrganisationController($mdDialog) {
    var vm = this;

    vm.cancelDialog = cancelDialog;

    function cancelDialog() {
        $mdDialog.cancel();
    }
}