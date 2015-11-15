
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
                WebStorage.setFavAlbum(scope.album.id);
            };

            scope.isFav = function (id) {
                return WebStorage.isFavAlbum(id);
            }
        }
    };
}]);