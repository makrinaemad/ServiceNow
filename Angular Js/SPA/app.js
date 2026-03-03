var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/users", {
        templateUrl : "views/users.html",
        controller : "UsersController"

    })
    .when("/about", {
        templateUrl : "views/about.html",
        controller : "AboutController"
    })
    .when("/userDetails/:id", {
        templateUrl : "views/userDetails.html",
        controller : "UserDetailController"
    })
    .when("/addUser", {
        templateUrl : "views/addUser.html",
        controller : "UsersController"
    })
    .otherwise({
        redirectTo: '/users'
    });
});