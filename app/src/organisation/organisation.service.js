'use strict';

angular
.module('moApp.organisation')
.factory('organisationService', organisationService);

function organisationService($http) {

    var selectedOrganisation = [];

    var service = {
        getOrganisations: getOrganisations,
        getFullHierachy: getFullHierachy,
        setSelectedOrganisation: setSelectedOrganisation,
        getSelectedOrganisation: getSelectedOrganisation,
        getUnitDetails: getUnitDetails
    };

    return service;

    function setSelectedOrganisation(organisation) {
        selectedOrganisation = organisation;
    }

    function getSelectedOrganisation() {
        return selectedOrganisation;
    }

    function getOrganisations() {
        return $http.get("/o/").then(function (response) {
            console.log(response.data);
            return response.data;
        });
    }

    function getFullHierachy(org_uuid) {
       return  $http.get('/o/' + org_uuid + '/full-hierarchy').then(function(response) {
            console.log(response.data.hierarchy);
            return response.data.hierarchy;
        });
    }

    function getUnitDetails(org_uuid, org_unit_uuid) {
        return $http.get('/o/'+ org_uuid +'/org-unit/'+ org_unit_uuid +'/?validity=present').then(function(response) {
            console.log(response);
            return response.data[0];
        });
    }

    function validity(tense) {
        return '?validity='+ tense + '&effective-date='
    }


}