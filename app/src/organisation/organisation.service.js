'use strict';

angular
.module('moApp.organisation')
.factory('organisationService', organisationService);

function organisationService($http) {

    var selectedOrganisation = [];

    var service = {
        createOrgUnit: createOrgUnit,
        getOrganisations: getOrganisations,
        getFullHierachy: getFullHierachy,
        setSelectedOrganisation: setSelectedOrganisation,
        getSelectedOrganisation: getSelectedOrganisation,
        getUnitDetails: getUnitDetails,
        getLocationDetails: getLocationDetails,
        getContactDetails: getContactDetails,
        getHistory: getHistory,
        moveOrgUnit: moveOrgUnit,
        getOrgUnitTypes: getOrgUnitTypes,
        getContactTypes: getContactTypes,
        getContactProperties: getContactProperties,
        getGeographicalLocation: getGeographicalLocation,
        endOrgUnit: endOrgUnit
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
            return response.data;
        });
    }

    function getFullHierachy(org_uuid) {
       return  $http.get('/o/' + org_uuid + '/full-hierarchy').then(function(response) {
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
            return response.data;
        });
    }

    function getHistory(org_uuid, org_unit_uuid) {
        return $http.get('/o/'+ org_uuid +'/org-unit/'+ org_unit_uuid +'/history/').then(function(response) {
            return response.data;
        });
    }

    function createOrgUnit(orgUnit) {
        return $http.post('/o/' + orgUnit.org + '/org-unit', orgUnit).then(function(response) {
            return response;
        });
    }

    function endOrgUnit(org_uuid, org_unit_uuid, endDate) {
        return $http.delete('/o/'+ org_uuid +'/org-unit/'+ org_unit_uuid +'?endDate=' + endDate).then(function(response) {
            return response;
        });
    }

    function editOrgUnit(org_uuid, org_unit_obj) {
        
    }

    function moveOrgUnit(org_uuid, from_uuid, to_uuid, date) {
        var obj = {
            'moveDate': date,
            'newParentOrgUnitUUID' : to_uuid
        };

        $http.post('/o/' + org_uuid + '/org-unit/' + from_uuid +'/actions/move', obj).then(function(response) {
            console.log('it worked!');
        });
    }

    function removeOrgUnit() {

    }

    function validity(tense) {
        return '?validity='+ tense + '&effective-date=';
    }

    function getOrgUnitTypes() {
        return $http.get('/org-unit/type').then(function(response) {
            return response.data;
        });
    }

    function getContactTypes() {
        return $http.get('/role-types/contact/facets/type/classes/?facetKey=Contact_channel_location').then(function(response) {
            return response.data;
        });
    }

    function getContactProperties() {
        return $http.get('/role-types/contact/facets/properties/classes/').then(function(response) {
            return response.data;
        });
    }

    function getGeographicalLocation(address) {
        console.log('start search');
        return $http.get('/addressws/geographical-location?vejnavn=' + address).then(function(response) {
            return response.data;
        });
    }
}