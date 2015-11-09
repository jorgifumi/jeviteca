var dependencias = [
    "$scope", "$http", function ($scope, $http) {

        $http.get("data/genres.json").then(
            function (respuesta) {
                $scope.genres = respuesta.data;
            },
            function (error) {
                // Error al leer del archivo
            }
        );
    }
];

app.controller("GenresController", dependencias);