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

    $scope.$on('move-organisation', function () {
        moveOrganisationDialog();
    });

    $scope.$on('end-organisation', function () {
        endOrganisationDialog();
    });

    $scope.$on('show-history', function() {
        historyDialog();
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
            icon: 'edit',
            label: 'Rediger enhed',
            broadcast: 'edit-organisation'
        });
        sidebarToolsService.addTool(vm.toolbar, {
            icon: 'compare_arrows',
            label: 'Flyt enhed',
            broadcast: 'move-organisation'
        });
        sidebarToolsService.addTool(vm.toolbar, {
            icon: 'delete',
            label: 'Afslut enhed',
            broadcast: 'end-organisation'
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

    function moveOrganisationDialog() {
        $mdDialog.show({
            templateUrl: 'app/src/organisation/moveOrganisation/moveOrganisation.view.html',
            controller: 'MoveOrganisationController',
            controllerAs: 'vm',
            clickOutsideToClose: true
        });
    }

    function endOrganisationDialog() {
        $mdDialog.show({
            templateUrl: 'app/src/organisation/endOrganisation/endOrganisation.view.html',
            controller: 'EndOrganisationController',
            controllerAs: 'vm',
            clickOutsideToClose: true
        });
    }

    function historyDialog() {
        $mdDialog.show({
            templateUrl: 'app/src/organisation/history/history.view.html',
            controller: 'HistoryController',
            controllerAs: 'vm',
            clickOutsideToClose: true
        });
    }
}