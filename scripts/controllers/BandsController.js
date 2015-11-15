
app.controller("BandsController", ["$scope", "Bands", "FavBands", function ($scope, Bands, FavBands) {

    $scope.bands = Bands.data;
    $scope.favBands = FavBands;

}]);