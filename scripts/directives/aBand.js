angular.module('jeviteca').directive("aBand", [function () {

    return {
        restrict: "EA",
        templateUrl: "views/aBand.html",
        scope: {
            band: "="
        }
    };
}]);