'use strict';

angular.module('moApp.organisation', ['ngMaterial']).config(config);

function config($stateProvider) {
    $stateProvider.state('organisation', {
        parent: 'site',
        url: '/organisation',
        views: {
            'content@': {
                templateUrl: 'app/src/organisation/organisation.view.html',
                controller: 'OrganisationController',
                controllerAs: 'vm'
            }
        },
        data: {}
    }).state('organisation.detail', {
        url: '/:org_uuid',
        views: {
            'organisationDetail': {
                templateUrl: 'app/src/organisation/organisationDetail/organisationDetail.view.html',
                controller: 'OrganisationDetailController',
                controllerAs: 'vm'
            }
        },
        redirectTo: 'organisation.detail.unit'
    }).state('organisation.detail.unit', {
        // url: '/enhed',
        views: {
            'detailTab': {
                templateUrl: 'app/src/organisation/organisationDetail/unit.view.html',
            }
        }
    }).state('organisation.detail.location', {
        // url: '/lokation',
        views: {
            'detailTab': {
                templateUrl: 'app/src/organisation/organisationDetail/location.view.html',
            }
        }
    }).state('organisation.detail.contact', {
        // url: '/lokation',
        views: {
            'detailTab': {
                templateUrl: 'app/src/organisation/organisationDetail/contact.view.html',
            }
        }
    });
}