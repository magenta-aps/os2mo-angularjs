'use strict';

angular
    .module('moApp.employee')
    .controller('EmployeeController', EmployeeController);

function EmployeeController($scope, $mdDialog, sidebarToolsService) {
    var vm = this;

    vm.toolbar = [];

    activate();

    function activate() {
        sidebarToolsService.addTool(vm.toolbar, {
            icon: 'person_add',
            label: 'Ny medarbejder',
            broadcast: 'new-employee'
        });
        sidebarToolsService.addTool(vm.toolbar, {
            icon: 'person',
            label: 'Orlov',
            broadcast: 'maternatiy-leave'
        });
        sidebarToolsService.addTool(vm.toolbar, {
            icon: 'compare_arrows',
            label: 'Flyt medarbejder',
            broadcast: 'move-employee'
        });
        sidebarToolsService.addTool(vm.toolbar, {
            icon: 'cancel',
            label: 'Fjern medarbejder',
            broadcast: 'remove-employee'
        });
    }
}