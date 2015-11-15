
app.directive("favItem", ["WebStorage", function (WebStorage) {

    return {
        restrict: "EA",
        template: "<span>item</span>"
        //templateURL: "views/favItem.html",
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