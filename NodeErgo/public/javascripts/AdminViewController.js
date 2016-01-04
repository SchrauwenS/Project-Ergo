(function () {

    var App = angular.module("App", ["ngRoute"]);

    App.config(function ($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl: "views/AdminStartpage.html",
            controller: "AdminStartscreenCtrl"
        })
        .when("/AlgemeneAccountinstellingen", {
            templateUrl: "views/AlgemeneAccountinstellingen.html",
            controller: "AACtrl"
        })
        .when("/OneUser", {
            templateUrl: "views/Admin.html",
            controller: "AdminCtrl"
        })
        .when("/AllUsers", {
            //
        })
         .otherwise({ redirectTo: "/" });//indien pagina niet gevonden wordt
    });
}());
