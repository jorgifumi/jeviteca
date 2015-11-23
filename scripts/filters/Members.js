
angular.module('jeviteca').filter("Members", [function () {
    return function (array) {
        if (array.length >= 2) {
            var last = array.pop();
            return array.join(", ") + " and " + last;
        }

        return array;
    }
}]);
