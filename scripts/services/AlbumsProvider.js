
app.service("AlbumsProvider", function($http, Properties) {
    this.getAlbums = function() {
        return $http.get(Properties.backEndUrl + "/albums.json", { cache: true });
    };
});