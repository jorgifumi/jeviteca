
angular.module('jeviteca').controller("GenresController", ["$scope", "Genres", "FavGenres", function ($scope, Genres, FavGenres) {

    $scope.genres = Genres.data;
    $scope.favGenres = FavGenres;

}]);