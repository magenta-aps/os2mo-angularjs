'use strict';

angular
    .module('moApp.organisation')
    .controller('OrganisationController', OrganisationController);

function OrganisationController($scope, $mdDialog) {
    var vm = this;

    $scope.$on('new-organisation', function () {
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