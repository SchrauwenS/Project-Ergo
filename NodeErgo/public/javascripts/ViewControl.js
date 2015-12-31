(function () {

    var App = angular.module("App", ["ngRoute"]);

    App.config(function ($routeProvider){
        $routeProvider
            .when("/", {
            templateUrl: "views/Startpage.html",
            controller: "StartscreenCtrl"
            })
            .when("/Questions", {
                templateUrl: "views/Questions.html",
                controller: "MainCtrl"
            })
            .when("/Endscreen", {
            templateUrl: "views/Endscreen.html",
            controller: "EndscreenCtrl"
            })
            .when("/AlgemeneAccountinstellingen", {
                templateUrl: "views/AlgemeneAccountinstellingen.html",
                controller: "AACtrl"
            })
            .otherwise({ redirectTo: "/" });//indien pagina niet gevonden wordt
    });
}());