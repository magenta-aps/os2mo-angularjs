'use strict';

angular
    .module('moApp.dashboard')
    .controller('DashboardController', DashboardController);

function DashboardController() {
    var vm = this;

    vm.currentNavItem = 'page1';

    vm.goto = function(page) {
        console.log("Goto " + page);
      }
}