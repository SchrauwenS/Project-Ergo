(function () {

    var App = angular.module("App", ["ngRoute"]);

    App.config(function ($routeProvider){
        $routeProvider
            .when("/Questions", {
                templateUrl: "views/Questions.html",
                controller: "MainCtrl"
            })
            .when("/Endscreen", {
            templateUrl: "views/Endscreen.html",
            controller: "EndscreenCtrl"
            })
            .otherwise({ redirectTo: "/Questions" });//indien pagina niet gevonden wordt
    });
}());