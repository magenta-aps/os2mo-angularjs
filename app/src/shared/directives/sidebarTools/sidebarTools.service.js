'use strict';

angular
.module('moApp')
.factory('sidebarToolsService', sidebarToolsService);

function sidebarToolsService($http) {
    var tools = [];

    var service = {
        getTools: getTools,
        addTool: addTool
    };

    return service;

    function getTools() {
        return tools;
    }

    function addTool(tool) {
        tools.push(tool);
    }
}