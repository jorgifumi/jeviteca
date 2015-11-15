
app.controller("AlbumsController", ["$scope", "Albums", "FavAlbums", function ($scope, Albums, FavAlbums) {

    $scope.albums = Albums.data;
    $scope.favAlbums = FavAlbums;
    window.console.log(FavAlbums);
    //debugger;

}]);