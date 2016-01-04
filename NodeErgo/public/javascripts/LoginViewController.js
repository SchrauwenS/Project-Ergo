(function () {

    var App = angular.module("App", ["ngRoute"]);

    App.config(function ($routeProvider){
        $routeProvider
        .when("/", {
                templateUrl: "views/Login.html"
        })
        .when("/Register", {
            templateUrl: "views/Register.html"
        })
            .otherwise({ redirectTo: "/" });//indien pagina niet gevonden wordt
    });
}());
