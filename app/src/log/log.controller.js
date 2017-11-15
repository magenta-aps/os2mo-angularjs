'use strict';

angular
    .module('moApp.log')
    .controller('LogController', LogController);

function LogController() {
    var vm = this;

    vm.currentNavItem = 'page1';

    vm.goto = function (page) {
        console.log("Goto " + page);
    };
}