(function () {
    var App = angular.module("App");
    var AdminStartscreenCtrl = function ($scope, $window, $routeParams, $location) {
                
        $scope.Uitloggenclick = function () {
            var url = "http://" + $window.location.host + "/logout";
            $window.location.href = url;
        }

        $scope.Resultsclick = function () {
             $location.path("/AllUsers");
        }
        $scope.Startclick = function () {
            $location.path("/OneUser");
        }
        
        $scope.Configclick = function () {
            $location.path("/AlgemeneAccountinstellingen");
        }

        };
    App.controller("AdminStartscreenCtrl", AdminStartscreenCtrl);

    })();