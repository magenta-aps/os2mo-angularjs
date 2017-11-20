'use strict';

angular
.module('moApp.organisation')
.controller('EndOrganisationController', EndOrganisationController);

function EndOrganisationController($mdDialog) {
    var vm = this;

    vm.cancelDialog = cancelDialog;

    function cancelDialog() {
        $mdDialog.cancel();
    }
}