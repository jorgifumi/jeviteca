
app.service("AlbumsProvider", function($http) {
    this.getAlbums = function() {
        return $http.get("data/albums.json", { cache: true });
    };
});