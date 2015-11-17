var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/Html/', {
        templateUrl: '/Html/'
    })
    .when('/Html/dasboard', {
        templateUrl: '/Html/'
    })
    .when('/Html/Index', {
        templateUrl: '/Html/'
    })
    .otherwhise({
        redirectTo: '/Html/'
    });


});

app.controller('loginCtrl', function ($scope) {

    $scope.submit = function () {
        var uname = $scope.username;
        var password = $scope.password;

        if ($scope.username == 'admin' && $scope.password == 'admin') {
            $location.path('Html/Index');
        }

    };

});