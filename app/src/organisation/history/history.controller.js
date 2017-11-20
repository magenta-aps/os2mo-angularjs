'use strict';

angular
.module('moApp.organisation')
.controller('HistoryController', HistoryController);

function HistoryController($mdDialog, organisationService) {
    var vm = this;
    var org = organisationService.getSelectedOrganisation();

    vm.cancelDialog = cancelDialog;
    vm.history = [];

    activate();

    function activate() {
        organisationService.getHistory(org.org, org.uuid).then(function(response) {
            vm.history = response;
        });
    }

    function cancelDialog() {
        $mdDialog.cancel();
    }
}