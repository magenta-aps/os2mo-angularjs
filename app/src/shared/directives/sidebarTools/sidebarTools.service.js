'use strict';

angular
.module('moApp')
.factory('sidebarToolsService', sidebarToolsService);

function sidebarToolsService($http) {
    var tools = [];

    var service = {
        addTool: addTool,
        clear: clear,
        getTools: getTools
    };

    return service;

    function clear() {
        tools = [];
    }

    function getTools() {
        return tools;
    }

    function addTool(tool) {
        tools.push(tool);
    }
}