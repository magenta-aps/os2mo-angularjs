angular
    .module('angularStubApp.dashboard')
    .controller('DashboardController', DashboardController);

function DashboardController($scope, dashboardService) {
    var vm = this;
    vm.dashlets = dashboardService.getDashlets();
}