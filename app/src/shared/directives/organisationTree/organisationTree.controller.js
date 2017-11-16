'use strict';

angular
    .module('moApp.organisationTree')
    .controller('OrganisationTreeController', OrganisationTreeController);

function OrganisationTreeController($scope, $state, organisationService) {
    var vm = this;

    vm.hierarchy = [];
    vm.getLink = getLink;
    vm.viewOrganisation = viewOrganisation;

    $scope.$watch("orgUuid", function(newVal) {
      getFullHierarchy();
    });

    function getFullHierarchy() {
      organisationService.getFullHierachy($scope.orgUuid).then(function(response) {
        vm.hierarchy = response;
      });
    }

    function getLink(uuid) {
      return 'organisation.detail({org_uuid: "' + uuid+ '"})';
    }

    function viewOrganisation(organisation) {
      organisationService.setSelectedOrganisation(organisation);

      $state.go('organisation.detail', {
        org_uuid: organisation.uuid
      });
    }
}