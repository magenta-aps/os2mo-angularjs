'use strict';

angular
    .module('moApp.header')
    .controller('HeaderController', HeaderController);

function HeaderController($scope, $mdSidenav, APP_CONFIG) {
    var vm = this;

    vm.logoUrl = APP_CONFIG.logoSrc;
}
