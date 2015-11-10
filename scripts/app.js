
var app = angular.module('jeviteca', ["ngRoute"]);

app.config(["BackendProvider", "Properties", function (BackendProvider, Properties) {

    BackendProvider.setUpUrlBackend(Properties.urlBackEnd);
    BackendProvider.enableCache();
} ]);

app.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/albums", {
        controller: "AlbumsController",
        templateUrl: "views/Albums.html",
        resolve: {
            Albums: ["Backend", function (Backend) {
                return Backend.getAlbums();
            }]
        }
    });

    $routeProvider.when("/bands", {
        controller: "BandsController",
        templateUrl: "views/Bands.html",
        resolve: {
            Bands: ["Backend", function (Backend) {
                return Backend.getBands();
            } ]
        }
    });

    $routeProvider.when("/genres", {
        controller: "GenresController",
        templateUrl: "views/Genres.html",
        resolve: {
            Genres: ["Backend", function (Backend) {
                return Backend.getGenres();
            } ]
        }
    });

    // Configuramos una ruta por defecto.
    $routeProvider.otherwise({
        redirectTo: "/albums"
    });

}]);