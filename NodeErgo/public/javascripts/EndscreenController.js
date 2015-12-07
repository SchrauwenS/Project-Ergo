(function () {
    var App = angular.module("App");
    var EndscreenCtrl = function ($scope, $routeParams, $location) {
        
        $scope.button3 = "Uitloggen";
        $scope.button4 = "test herstarten";
        
        $scope.Button3click = function () {
        
        }

        $scope.Button4click = function () {
             $location.path("/Questions");
        }

        };
    App.controller("EndscreenCtrl", EndscreenCtrl);

    })();