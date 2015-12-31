(function () {
    var App = angular.module("App");
    var StartscreenCtrl = function ($scope, $window, $routeParams, $location) {
                
        $scope.Uitloggenclick = function () {
            var url = "http://" + $window.location.host + "/logout";
            $window.location.href = url;
        }

        $scope.Resultsclick = function () {
             $location.path("/Endscreen");
        }
        $scope.Startclick = function () {
            $location.path("/Questions");
        }
        
        $scope.Configclick = function () {
            $location.path("/");
        }

        };
    App.controller("StartscreenCtrl", StartscreenCtrl);

    })();