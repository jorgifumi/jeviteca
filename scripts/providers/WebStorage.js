
app.provider("WebStorage", [function () {

    return {
        browserCapable: function () {

            return (typeof(Storage) !== "undefined");

        },

        $get: ["$q", function ($q) {
            return {
                setFavAlbum: function (albumId) {
                    localStorage.setItem("favAlbums", JSON.stringify({ "id": albumId, "fav": true }));
                    //debugger;
                },
                getFavAlbums: function () {
                    var diferido = $q.defer();
                    diferido.resolve(JSON.parse(localStorage.getItem("favAlbums")));

                    return diferido.promise;
                }
            }
        }]
    }
}]);