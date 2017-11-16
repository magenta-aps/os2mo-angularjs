'use strict';

angular
    .module('moApp.dashboard')
    .controller('DashboardController', DashboardController);

function DashboardController($scope, $mdDialog) {
    var vm = this;

    vm.currentNavItem = 'page1';

    vm.goto = function(page) {
        
    };

    $scope.$on('new-organisation', function() {
        newOrganisationDialog();
    });

    function newOrganisationDialog() {
        $mdDialog.show({
            templateUrl: 'app/src/organisation/createOrganisation/createOrganisation.view.html',
            controller: 'CreateOrganisationController',
            controllerAs: 'vm',
            clickOutsideToClose: true
        });
    }
}