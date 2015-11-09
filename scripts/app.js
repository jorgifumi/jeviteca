
var app = angular.module('jeviteca', ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/albums", {
        controller: "AlbumsController",
        templateUrl: "views/Albums.html",
        resolve: {
            Albums: ["AlbumsProvider", function (AlbumsProvider) {
                return AlbumsProvider.getAlbums();
            }]
        }
    });

    $routeProvider.when("/bands", {
        controller: "BandsController",
        templateUrl: "views/Bands.html",
        resolve: {
            Bands: ["BandsProvider", function (BandsProvider) {
                return BandsProvider.getBands();
            } ]
        }
    });

    $routeProvider.when("/genres", {
        controller: "GenresController",
        templateUrl: "views/Genres.html",
        resolve: {
            Genres: ["GenresProvider", function (GenresProvider) {
                return GenresProvider.getGenres();
            } ]
        }
    });

    // Configuramos una ruta por defecto.
    $routeProvider.otherwise({
        redirectTo: "/albums"
    });

}]);