
var app = angular.module('jeviteca', ["ngRoute"]);

app.config(["BackendProvider", "Properties", function (BackendProvider, Properties) {

    BackendProvider.setUpUrlBackend(Properties.urlBackEnd);
    BackendProvider.enableCache();
} ]);

app.config(["WebStorageProvider", function (WebStorageProvider) {
    window.console.log("Navegador compatible: " + WebStorageProvider.browserCapable());
}]);

app.config(["$routeProvider", function ($routeProvider) {

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

    $routeProvider.when("/detalle/:idAlbum", {
        controller: "DetailAlbumController",
        templateUrl: "views/detailAlbum.html",
        resolve: {
            Album: ["Backend", "$route" ,"$filter", "$q", function (Backend, $route, $filter, $q) {

                var diferido = $q.defer();
                Backend.getAlbums().then(function(datos) {
                    var res = $filter("filter")(datos.data, {"id": $route.current.params.idAlbum})[0];
                    diferido.resolve(res);
                });
                return diferido.promise;
                /*Backend.getAlbums().then(function (datos) {
                    var res = $filter("filter")(datos.data, {"id": $route.current.params.idAlbum})[0];
                    console.log(res);
                    return res;
                });*/
            }]
        }
    });

    // Configuramos una ruta por defecto.
    $routeProvider.otherwise({
        redirectTo: "/albums"
    });

}]);