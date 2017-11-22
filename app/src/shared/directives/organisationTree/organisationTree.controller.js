'use strict';

angular
    .module('moApp.organisationTree')
    .controller('OrganisationTreeController', OrganisationTreeController);

function OrganisationTreeController($scope, $state, organisationService) {
    var vm = this;

    vm.hierarchy = [];
    vm.getLink = getLink;
    vm.viewOrganisation = viewOrganisation;

    $scope.$on('refresh-org-tree', function() {
      getFullHierarchy();
    });

    $scope.$watch("orgUuid", function(newVal) {
      getFullHierarchy();
    });

    $scope.treedata = 
    [
      { "label" : "User", "id" : "role1", "children" : [
        { "label" : "subUser1", "id" : "role11", "children" : [] },
        { "label" : "subUser2", "id" : "role12", "children" : [
          { "label" : "subUser2-1", "id" : "role121", "children" : [
            { "label" : "subUser2-1-1", "id" : "role1211", "children" : [] },
            { "label" : "subUser2-1-2", "id" : "role1212", "children" : [] }
          ]}
        ]}
      ]},
      { "label" : "Admin", "id" : "role2", "children" : [] },
      { "label" : "Guest", "id" : "role3", "children" : [] }
    ];

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