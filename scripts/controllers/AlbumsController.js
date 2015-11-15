
app.controller("AlbumsController", ["$scope", "Albums", "FavAlbums", "$location", function ($scope, Albums, FavAlbums, $location) {

    $scope.albums = Albums.data;
    $scope.favAlbums = FavAlbums;
    
    $scope.navegar = function (idAlbum) {

        $location.path("/detalle/" + idAlbum);
    };

}]);