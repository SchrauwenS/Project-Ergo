(function () {

    var App = angular.module("App", ["ngRoute"]);

    App.config(function ($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl: "views/Login.html",
                controller: "LoginController"
            })
            .otherwise({ redirectTo: "/" });//indien pagina niet gevonden wordt
    });
}());
