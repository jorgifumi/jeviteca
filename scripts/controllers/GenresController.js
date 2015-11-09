
app.controller("GenresController", ["$scope", "Genres", function ($scope, Genres) {

    $scope.genres = Genres.data;

}]);