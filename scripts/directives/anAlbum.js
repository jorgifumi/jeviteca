
app.directive("anAlbum", ["WebStorage", function (WebStorage) {

    return {
        restrict: "EA",
        templateUrl: "views/anAlbum.html",
        scope: {
            album: "=",
            favAlbums: "="
        },
        link: function (scope) {
            scope.fav = function () {
                WebStorage.setFavAlbum(scope.album.id);
            };

            scope.isFav = function (id) {
                WebStorage.isFavAlbum(id)
            }
        }
    };
}]);