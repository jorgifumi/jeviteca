
angular.module('jeviteca').directive("favItem", ["WebStorage", function (WebStorage) {

    return {
        restrict: "EA",
        templateUrl: "views/favItem.html",
        scope: {
            item: "=",
            favType: "@"
        },
        link: function (scope) {
            scope.fav = function () {
                WebStorage.switchFav(scope.item.id, scope.favType);
            };

            scope.isFav = function () {
                return WebStorage.isFav(scope.item.id, scope.favType);
            }
        }
    }
}]);