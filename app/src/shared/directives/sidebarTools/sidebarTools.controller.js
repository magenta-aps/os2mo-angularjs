'use strict';

angular
    .module('moApp.sidebarTools')
    .controller('SidebarToolsController', SidebarToolsController);

function SidebarToolsController($rootScope, sidebarToolsService) {
    var vm = this;

    vm.tools = [];
    vm.openDialog = openDialog;

    activate();

    function activate() {

        //TODO: refactor and move to the respective controllers visible 

        sidebarToolsService.clear();
        
        sidebarToolsService.addTool({
            icon: 'add_circle',
            label: 'Ny enhed',
            broadcast: 'new-organisation'
        });
        sidebarToolsService.addTool({
            icon: 'title',
            label: 'Omdøb enhed',
            broadcast: 'rename-organisation'
        });
        sidebarToolsService.addTool({
            icon: 'compare_arrows',
            label: 'Flyt enhed',
            broadcast: 'move-organisation'
        });
        sidebarToolsService.addTool({
            icon: 'cancel',
            label: 'Afslut enhed',
            broadcast: 'cancel-organisation'
        });

        vm.tools = sidebarToolsService.getTools();
    }

    function openDialog(broadcast) {
        $rootScope.$broadcast(broadcast);
    }
}