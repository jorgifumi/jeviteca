
var dependencias = [
    "$scope", "$http", function ($scope, $http) {

         $http.get("data/bands.json").then(
            function (respuesta) {
                $scope.bands = respuesta.data;
            },
            function (error) {
                // Error al leer del archivo
            }
        );
    }
];

app.controller("BandsController", dependencias);