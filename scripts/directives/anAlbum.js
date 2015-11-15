
app.directive("anAlbum", ["WebStorage", function (WebStorage) {

    return {
        restrict: "EA",
        templateUrl: "views/anAlbum.html",
        scope: {
            album: "="
        }
    };
}]);