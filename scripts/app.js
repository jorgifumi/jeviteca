
var app = angular.module('jeviteca', ["ngRoute", "route-segment", "view-segment"]);

app.config(["$routeSegmentProvider", "$routeProvider", function ($routeSegmentProvider, $routeProvider) {

    $routeSegmentProvider.when("/albums", "albums");
    $routeSegmentProvider.when("/bands", "bands");
    $routeSegmentProvider.when("/genres", "genres");

    $routeSegmentProvider.segment("albums", {
        controller: "AlbumsController",
        templateUrl: "views/Albums.html"
    });

    $routeSegmentProvider.segment("bands", {
        controller: "BandsController",
        templateUrl: "views/Bands.html"
    });

    $routeSegmentProvider.segment("genres", {
        controller: "GenresController",
        templateUrl: "views/Genres.html"
    });

    // Configuramos una ruta por defecto.
    $routeProvider.otherwise({
        redirectTo: "/albums"
    });

}]);