angular
    .module('moApp.header')
    .controller('HeaderController', HeaderController);

function HeaderController($scope, $mdSidenav) {
    var vm = this;

    vm.toggleMenu = function () {
        $mdSidenav('left').toggle();
    };

}
