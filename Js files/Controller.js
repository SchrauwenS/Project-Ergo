var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:'login.html'
    })
    .when('/dasboard', {
        templateUrl: 'login.html'
    })
    
    .otherwhise({
        redirectTo: '/'
    });


});

app.controller('loginCtrl', function ($scope) {

    $scope.submit = function () {
        var uname = $scope.username;
        var password = $scope.password;

        if ($scope.username == 'admin' && $scope.password == 'admin') {
            $location.path('/dashboard');
        }

    };

})