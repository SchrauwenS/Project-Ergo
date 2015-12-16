(function () {
    var App = angular.module("App");
    var EndscreenCtrl = function ($scope, $window, $routeParams, $location, $http) {
        

        $http.get('results/testScore')
            .then(function (res) {
            $scope.results = res.data;
        });
        
        $scope.button3 = "Uitloggen";
        $scope.button4 = "test herstarten";
        
        $scope.Button3click = function () {
            var url = "http://" + $window.location.host + "/logout";
            $window.location.href = url;
          
        }

        $scope.Button4click = function () {
             $location.path("/Questions");
        }

        };
    App.controller("EndscreenCtrl", EndscreenCtrl);

    })();