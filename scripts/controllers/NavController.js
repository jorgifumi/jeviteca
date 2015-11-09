
app.controller("NavController", ["$scope", "$route", function ($scope, $route) {

    $scope.routeIsAlbums = function () {
        return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/albums";
    };

    $scope.routeIsBands = function () {
        return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/bands";
    };

    $scope.routeIsGenres = function () {
        return $route.current && $route.current.$$route && $route.current.$$route.originalPath === "/genres";
    };
}]);