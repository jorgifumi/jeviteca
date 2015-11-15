
app.directive("anAlbum", ["WebStorage", function (WebStorage) {

    return {
        restrict: "EA",
        templateUrl: "views/anAlbum.html",
        scope: {
            album: "=",
            favAlbum: "="
        },
        link: function (scope) {
            scope.fav = function () {
                WebStorage.switchFav(scope.album.id, "album");
            };

            scope.isFav = function () {
                return WebStorage.isFav(scope.album.id, "album");
            }
        }
    };
}]);