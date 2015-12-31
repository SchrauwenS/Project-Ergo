(function () {
    var App = angular.module("App");
    var EndscreenCtrl = function ($scope, $window, $routeParams, $location, $http) {
        

        $http.get('results/testScore')
            .then(function (res) {
            $scope.results = res.data;
        });
        
        $scope.button4 = "naar start";
        
        $scope.Button4click = function () {
             $location.path("/");
        }

        };
    App.controller("EndscreenCtrl", EndscreenCtrl);

    })();