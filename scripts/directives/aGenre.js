
angular.module('jeviteca').directive("aGenre", [function () {

    return {
        restrict: "EA",
        templateUrl: "views/aGenre.html",
        scope: {
            genre: "="
        }
    };
}]);