(function () {
    var App = angular.module("App");
    var EndscreenCtrl = function ($scope, $routeParams, $location, $http) {
        
        $http.get('JSON/Questions.json')
            .then(function (res) {
            $scope.questionlist = res.data;
        });
        $http.get('JSON/Answers.json')
            .then(function (res) {
            $scope.results = res.data;
        });
        
         //$scope.totaal = $scope.results.totaal
         //$scope.subtotalGezondheid = 
         //$scope.subtotalRelaties
         //$scope.subtotalIdentiteit
         //$scope.subtotalUitdagingIntresse  

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