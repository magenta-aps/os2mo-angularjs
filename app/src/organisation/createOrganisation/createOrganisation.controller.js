'use strict';

angular
.module('moApp.organisation')
.controller('CreateOrganisationController', CreateOrganisationController);

function CreateOrganisationController($mdDialog) {
    var vm = this;

    vm.cancelDialog = cancelDialog;

    function cancelDialog() {
        $mdDialog.cancel();
    }
}