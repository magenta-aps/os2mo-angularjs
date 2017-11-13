angular
    .module('moApp.search')
    .controller('AutosuggestController', AutosuggestController);

/**
 * Main Controller for the Search module
 * @param $scope
 * @constructor
 */
function AutosuggestController($state, $q, $mdConstant, searchService, fileUtilsService) {

    var asctrl = this;
    asctrl.liveSearchResults = {
        cases: null,
        documents: null
    };
    asctrl.searchTerm = "";
    asctrl.selectedIndex = -1;
    asctrl.totalSuggestion = 0;
    asctrl.loading = false;
    asctrl.hidden = false;

    /**
     * This function is meant to be called to redirect user to the search page
     */
    asctrl.gotoSearchPage = function () {
        $state.go('search', {'searchTerm': asctrl.searchTerm});
    };

    function stopAndPrevent(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function clearResult(argument) {
        asctrl.liveSearchResults = {
            cases: null,
            documents: null
        };
        asctrl.totalSuggestion = 0;
        asctrl.selectedIndex = -1;
    }

    /**
     * Clears the searchText value and selected item.
     */
    function clearValue() {
        asctrl.searchTerm = '';
        clearResult();
    }

    /**
     * Handling keyboard input
     */
    asctrl.keydown = function (event) {
        switch (event.keyCode) {
            case $mdConstant.KEY_CODE.DOWN_ARROW:
                if (asctrl.loading) return;
                stopAndPrevent(event);
                if (asctrl.selectedIndex < asctrl.totalSuggestion) asctrl.selectedIndex++;
                //console.log("Selected index: ", asctrl.selectedIndex);
                break;
            case $mdConstant.KEY_CODE.UP_ARROW:
                if (asctrl.loading) return;
                stopAndPrevent(event);
                if (asctrl.selectedIndex > -1) asctrl.selectedIndex--;
                //console.log("Selected index: ", asctrl.selectedIndex);
                break;
            case $mdConstant.KEY_CODE.TAB:
            case $mdConstant.KEY_CODE.ENTER:
                if (asctrl.selectedIndex === -1) return;
                stopAndPrevent(event);
                var selected = getSelectedItemByIndex(asctrl.selectedIndex);
                asctrl.goToSuggestion(selected);
                break;
            case $mdConstant.KEY_CODE.ESCAPE:
                stopAndPrevent(event);
                clearValue();
                break;
            default:
        }
    }

}
