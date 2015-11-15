
app.provider("WebStorage", [function () {

    return {
        browserCapable: function () {

            return (typeof(Storage) !== "undefined");

        },

        $get: ["$q", function ($q) {
            return {
                setFavAlbum: function (albumId) {
                    // Leo lo que hay actualmente
                    var data = JSON.parse(localStorage.getItem("favAlbums"));
                    // Se invierte el valor
                    if(data[albumId]) {
                        data[albumId.toString()] = false;
                    }else{
                        data[albumId.toString()] = true;
                    }
                    localStorage.setItem("favAlbums", JSON.stringify(data));
                },
                getFavAlbums: function () {
                    var diferido = $q.defer();
                    diferido.resolve(JSON.parse(localStorage.getItem("favAlbums")));

                    return diferido.promise;
                },
                isFavAlbum: function (id) {
                    var data = JSON.parse(localStorage.getItem("favAlbums"));

                    if (data[id]) {
                        return true;
                    }
                    return false;

                }
            }
        }]
    }
}]);