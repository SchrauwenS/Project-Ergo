(function () {

    var App = angular.module("App", ["ngRoute"]);

    App.config(function ($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl: "views/Admin.html",
            controller: "AdminCtrl"
        })
        .when("/AlgemeneAccountinstellingen", {
            templateUrl: "views/AlgemeneAccountinstellingen.html",
            controller: "AACtrl"
        })
         .otherwise({ redirectTo: "/" });//indien pagina niet gevonden wordt
    });
}());
