'use strict';

angular
    .module('moApp.sidebarTools')
    .controller('SidebarToolsController', SidebarToolsController);

function SidebarToolsController($scope, $rootScope, sidebarToolsService) {
    var vm = this;

    vm.tools = $scope.tools;
    vm.openDialog = openDialog;

    activate();

    function activate() {

    }

    function openDialog(broadcast) {
        $rootScope.$broadcast(broadcast);
    }
}