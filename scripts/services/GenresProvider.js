
app.service("GenresProvider", function($http, Properties) {
    this.getGenres = function() {
        return $http.get(Properties.backEndUrl + "/genres.json", { cache: true });
    };
});