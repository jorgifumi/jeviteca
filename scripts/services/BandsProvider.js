
app.service("BandsProvider", function($http) {
    this.getBands = function() {
        return $http.get("data/bands.json", { cache: true });
    };
});