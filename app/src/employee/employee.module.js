'use strict';

angular.module('moApp.employee', ['ngMaterial']).config(config);

function config($stateProvider) {

    $stateProvider.state('employee', {
        url: '/medarbejdere',
        views: {
            'content@': {
                templateUrl: 'app/src/employee/employee.view.html',
                controller: 'EmployeeController',
                controllerAs: 'vm'
            }
        }
    })
}