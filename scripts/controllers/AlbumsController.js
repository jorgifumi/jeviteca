
app.controller("AlbumsController", ["$scope", "Albums", function ($scope, Albums) {

    $scope.albums = Albums.data;

}]);