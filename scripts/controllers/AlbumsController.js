var dependencias = [
    "$scope", "$http", function ($scope, $http) {

        $http.get("data/albums.json").then(
            function (respuesta) {
                $scope.albums = respuesta.data;
            },
            function (error) {
                // Error al leer del archivo
            }
        );
    }
];

app.controller("AlbumsController", dependencias);