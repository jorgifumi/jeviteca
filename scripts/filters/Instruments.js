
angular.module('jeviteca').filter("Instruments", [function () {
    return function (collection) {
        return "Instruments: " + collection.join(", ");
    };
}]);