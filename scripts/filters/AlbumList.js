
app.filter("AlbumList", [function () {
    return function (collection) {
        var result = [];
        angular.forEach(collection, function (value, key) {
            result.push(value.title);
        });
        return result.join(", ");
    }
}]);