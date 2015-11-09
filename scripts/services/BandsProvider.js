
app.service("BandsProvider", function($http, Properties) {
    this.getBands = function() {
        return $http.get(Properties.backEndUrl + "/bands.json", { cache: true });
    };
});