(function () {

    var App = angular.module("App", ["ngRoute"]);

    App.config(function ($routeProvider){
        $routeProvider
        .when("/", {
                templateUrl: "views/Login.html"
        })
        .when("/Register", {
            templateUrl: "views/register.html"
        })
            .otherwise({ redirectTo: "/" });//indien pagina niet gevonden wordt
    });
}());
