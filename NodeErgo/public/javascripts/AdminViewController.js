(function () {

    var App = angular.module("App", ["ngRoute"]);

    App.config(function ($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl: "views/Admin.html",
            controller: "AdminCtrl"
        })
         .otherwise({ redirectTo: "/" });//indien pagina niet gevonden wordt
    });
}());
