
app.directive("anAlbum", [function () {

    return {
        restrict: "EA",
        templateUrl: "views/anAlbum.html",
        scope: {
            album: "="
        }
    };
}]);