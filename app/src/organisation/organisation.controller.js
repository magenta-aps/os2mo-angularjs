'use strict';

angular
    .module('moApp.organisation')
    .controller('OrganisationController', OrganisationController);

function OrganisationController($scope, $mdDialog, organisationService, sidebarToolsService) {
    var vm = this;

    vm.toolbar = [];

    vm.organisations = [];
    vm.selectedOrganisation = '';

    $scope.$on('new-organisation', function () {
        newOrganisationDialog();
    });

    activate();

    function activate() {

        organisationService.getOrganisations().then(function(organisations) {
            vm.organisations = organisations;
        });

        sidebarToolsService.addTool(vm.toolbar, {
            icon: 'add_circle',
            label: 'Ny enhed',
            broadcast: 'new-organisation'
        });
        sidebarToolsService.addTool(vm.toolbar, {
            icon: 'title',
            label: 'Omdøb enhed',
            broadcast: 'rename-organisation'
        });
        sidebarToolsService.addTool(vm.toolbar, {
            icon: 'compare_arrows',
            label: 'Flyt enhed',
            broadcast: 'move-organisation'
        });
        sidebarToolsService.addTool(vm.toolbar, {
            icon: 'cancel',
            label: 'Afslut enhed',
            broadcast: 'cancel-organisation'
        });
    }

    function newOrganisationDialog() {
        $mdDialog.show({
            templateUrl: 'app/src/organisation/createOrganisation/createOrganisation.view.html',
            controller: 'CreateOrganisationController',
            controllerAs: 'vm',
            clickOutsideToClose: true
        });
    }
}