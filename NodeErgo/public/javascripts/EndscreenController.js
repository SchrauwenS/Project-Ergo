(function () {
    var App = angular.module("App");
    var EndscreenCtrl = function ($scope, $routeParams, $location, $http) {
        

        $http.get('results/testScore')
            .then(function (res) {
            $scope.results = res.data;
        });
        
        $scope.button3 = "Uitloggen";
        $scope.button4 = "test herstarten";
        
        $scope.Button3click = function () {
            $http.post("/logout");
            res.redirect("/");
        }

        $scope.Button4click = function () {
             $location.path("/Questions");
        }

        };
    App.controller("EndscreenCtrl", EndscreenCtrl);

    })();