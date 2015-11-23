
angular.module('jeviteca').provider("WebStorage", [function () {

    return {
        browserCapable: function () {

            return (typeof(Storage) !== "undefined");

        },

        $get: ["$q", function ($q) {
            return {

                getFavs: function (type) {
                    var diferido = $q.defer();
                    diferido.resolve(JSON.parse(localStorage.getItem(type)));

                    return diferido.promise;
                },

                switchFav: function (id, type) {
                    //Leer valor actual
                    var data = JSON.parse(localStorage.getItem(type));

                    // Se invierte el valor
                    if( data !== null) {
                        data[id.toString()] = !data[id.toString()];
                    }else{
                        data = {};
                        data[id.toString()] = true;
                    }

                    localStorage.setItem(type, JSON.stringify(data));
                },
                isFav: function (id,type) {
                    var data = JSON.parse(localStorage.getItem(type));
                    if (data !== null) {
                        if (data[id]) {
                            return true;
                        }
                    }
                    return false;
                }
            }
        }]
    }
}]);