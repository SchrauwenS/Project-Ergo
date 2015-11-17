    var app = angular.module('mainApp', ['ngRoute']);

    app.config(function($routeProvider){
        
        $routeProvider
        .when('/',
        {
            templateUrl: "/login.html"
        })
            .when('/Questions',
        {
            templateUrl: "/Questions.html"
        })
        .otherwise({
           redirectTo:'/'
        });

    });

    app.controller('loginCtrl', function ($scope,$location) {
        $scope.submit = function () {
            var uname = $scope.username;
            var password = $scope.password;

            if ($scope.username == 'admin' && $scope.password =='admin') {
                $location.path('/Questions')
            }
        }
    })