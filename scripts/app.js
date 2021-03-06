
var app = angular.module('jeviteca', ["ngRoute"]);

angular.module('jeviteca').config(["BackendProvider", "Properties", function (BackendProvider, Properties) {

    BackendProvider.setUpUrlBackend(Properties.urlBackEnd);
    BackendProvider.enableCache();
} ]);

angular.module('jeviteca').config(["WebStorageProvider", function (WebStorageProvider) {
    window.console.log("Navegador compatible: " + WebStorageProvider.browserCapable());
}]);

angular.module('jeviteca').config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/albums", {
        controller: "AlbumsController",
        templateUrl: "views/Albums.html",
        resolve: {
            Albums: ["Backend", function (Backend) {
                return Backend.getAlbums();
            }],
            FavAlbums: ["WebStorage", function (WebStorage) {
                return WebStorage.getFavs("album");
            }]
        }
    });

    $routeProvider.when("/bands", {
        controller: "BandsController",
        templateUrl: "views/Bands.html",
        resolve: {
            Bands: ["Backend", function (Backend) {
                return Backend.getBands();
            }],
            FavBands: ["WebStorage", function (WebStorage) {
                return WebStorage.getFavs("band");
            }]
        }
    });

    $routeProvider.when("/genres", {
        controller: "GenresController",
        templateUrl: "views/Genres.html",
        resolve: {
            Genres: ["Backend", function (Backend) {
                return Backend.getGenres();
            }],
            FavGenres: ["WebStorage", function (WebStorage) {
                return WebStorage.getFavs("genre");
            }]
        }
    });

    // Configuramos una ruta por defecto.
    $routeProvider.otherwise({
        redirectTo: "/albums"
    });

}]);