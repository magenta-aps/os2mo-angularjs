angular
    .module('angularStubApp.systemsettings')
    .controller('SystemSettingsController', SystemSettingsCtrl);

function SystemSettingsCtrl(systemSettingsPagesService) {
    var vm = this;
    vm.pages = systemSettingsPagesService.getPages()
        .filter(function (page) {
            if (isTenant) {
                return page.sref !== 'administration.systemsettings.tenantsmodules';
            }
            return true;
        });
    vm.modulesPages = systemSettingsPagesService.getModulesPages();
}