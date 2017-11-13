angular
    .module('moApp.dashboard')
    .controller('DashboardController', DashboardController);

function DashboardController($scope, dashboardService, errorService) {
    var vm = this;
    vm.dashlets = dashboardService.getDashlets();
    
    // Testing error message feature
    vm.showMeAnError = function() {
        
        errorService.displayErrorMsg('Here is an example of an error message. Remember to make it translatable!');
        
    };
}