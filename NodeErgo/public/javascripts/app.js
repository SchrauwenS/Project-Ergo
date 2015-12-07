(function () {

    var App = angular.module("App", ["ngRoute"]);

    App.config(function ($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl: "views/Questions.html",
                controller: "MainCtrl"
            })
            .otherwise({ redirectTo: "/" });//indien pagina niet gevonden word
    });
}());