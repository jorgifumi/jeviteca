
app.provider("Backend", [function () {

    var urlBE = "";
    var cacheIsOn = false;

    return {

        setUpUrlBackend: function (path) {
            urlBE = path;
        },

        enableCache: function () {
            cacheIsOn = true;
        },


        $get: ["$http", function ($http) {
            return {
                getAlbums: function () {
                    return $http.get(urlBE + "/albums.json", {cache: cacheIsOn});
                },

                getBands: function() {
                    return $http.get(urlBE + "/bands.json", {cache: cacheIsOn});
                },

                getGenres: function() {
                    return $http.get(urlBE + "/genres.json", { cache: cacheIsOn });
                }
            }
        }]
    }
}]);