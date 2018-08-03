var app = angular.module("myapp", [
    "ngRoute",
    "myControllers"
]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/search.html",
            controller: 'SearchController'
        })
        .when("/details/:itemId", {
            templateUrl: "partials/details.html",
            controller: "SearchController"
        })
        .when("/paris", {
            templateUrl: "paris.htm"
        });
});
