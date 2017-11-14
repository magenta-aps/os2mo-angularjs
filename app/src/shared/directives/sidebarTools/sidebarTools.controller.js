'use strict';

angular
    .module('moApp.sidebarTools')
    .controller('SidebarToolsController', SidebarToolsController);

function SidebarToolsController(sidebarToolsService) {
    var vm = this;

    vm.tools = [];

    activate();

    function activate() {

        //TODO: refactor and move to the respective controllers visible 
        sidebarToolsService.addTool({
            icon: 'add_circle',
            label: 'Ny enhed'
        });
        sidebarToolsService.addTool({
            icon: 'title',
            label: 'Omdøb enhed'
        });
        sidebarToolsService.addTool({
            icon: 'compare_arrows',
            label: 'Omdøb enhed'
        });
        sidebarToolsService.addTool({
            icon: 'cancel',
            label: 'Afslut enhed'
        });

        vm.tools = sidebarToolsService.getTools();
    }
}