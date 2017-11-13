angular
    .module('moApp')
    .directive('toggleClass', toggleClassDirective);

function toggleClassDirective() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                element.toggleClass(attrs.toggleClass);
            });
        }
    };
}