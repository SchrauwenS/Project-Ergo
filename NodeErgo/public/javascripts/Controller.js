var app = angular.module('mainApp', ['ngRoute']);



app.controller('loginCtrl', function ($scope, $location, $rootScope) {
    $scope.submit = function () {
        
            $location.path('/register')
        }
        
})