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
        getUnitDetails: getUnitDetails,
        getLocationDetails: getLocationDetails,
        getContactDetails: getContactDetails
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
            console.log(response.data);
            return response.data;
        });
    }

    function getUnitDetails(org_uuid, org_unit_uuid) {
        return $http.get('/o/'+ org_uuid +'/org-unit/'+ org_unit_uuid +'/?validity=present').then(function(response) {
            return response.data[0];
        });
    }

    function getLocationDetails(org_uuid, org_unit_uuid) {
        return getDetail(org_uuid, org_unit_uuid, 'location');
    }

    function getContactDetails(org_uuid, org_unit_uuid) {
        return getDetail(org_uuid, org_unit_uuid, 'contact-channel');
    }

    function getLeaderDetails(org_uuid, org_unit_uuid) {
        return getDetail(org_uuid, org_unit_uuid, 'leader');
    }

    function getEngagementDetails(org_uuid, org_unit_uuid) {
        return getDetail(org_uuid, org_unit_uuid, 'engagement');
    }

    function getAssociationDetails(org_uuid, org_unit_uuid) {
        return getDetail(org_uuid, org_unit_uuid, 'association');
    }

    function getJobFunctionDetails(org_uuid, org_unit_uuid) {
        return getDetail(org_uuid, org_unit_uuid,'job-function');
    }

    function getDetail(org_uuid, org_unit_uuid, detail) {
        return $http.get('/o/'+ org_uuid +'/org-unit/'+ org_unit_uuid +'/role-types/' + detail + '/?validity=present').then(function(response) {
            return response.data[0];
        });
    }

    function validity(tense) {
        return '?validity='+ tense + '&effective-date=';
    }


}