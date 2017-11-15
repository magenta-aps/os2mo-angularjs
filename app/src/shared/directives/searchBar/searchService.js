'use strict';

angular
    .module('moApp')
    .factory('searchService', searchService);

function searchService($http) {
    var service = {};
    
    return service;
}