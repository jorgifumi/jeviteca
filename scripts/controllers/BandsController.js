
app.controller("BandsController", ["$scope", "Bands", function ($scope, Bands) {

    $scope.bands = Bands.data;

}]);