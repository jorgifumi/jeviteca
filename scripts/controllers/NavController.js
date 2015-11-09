var dependencias = [
    "$scope", "$routeSegment", function ($scope, $routeSegment) {

        $scope.routeIsAlbums = function () {
            return $routeSegment.startsWith("albums");
        };

        $scope.routeIsBands = function () {
            return $routeSegment.startsWith("bands");
        };

        $scope.routeIsGenres = function () {
            return $routeSegment.startsWith("genres");
        };
    }
];

app.controller("NavController", dependencias);