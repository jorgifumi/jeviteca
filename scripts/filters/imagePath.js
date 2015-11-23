
angular.module('jeviteca').filter("ImagePath", ["Properties", function (Properties) {
    return function (image) {
        return Properties.urlImages + "/" + image;
    };
}]);