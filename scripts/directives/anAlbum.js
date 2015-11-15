
app.directive("anAlbum", [function () {

    return {
        restrict: "EA",
        templateUrl: "views/anAlbum.html",
        scope: {
            album: "=",
            onAlbumClick: "&"
        },
        link: function (scope) {
            scope.notifyClick = function () {

                scope.onAlbumClick({ idAlbum: scope.album.id });
            };

        }
    };
}]);