    var app = angular.module('mainApp', ['ngRoute']);

    app.config(function($routeProvider){
        
        $routeProvider
        .when('/',
        {
            templateUrl: "/login.html"
        })
            .when('/Questions',
        {
            resolve:{
                "check": function ($location,$rootScope) {
                    if (!$rootScope.LoggedIn) {
                       
                        $location.path('/')
                         }
                    
                }
            },
            templateUrl: '/Questions.html'
        })
        .otherwise({
           redirectTo:'/'
        });

    });

    app.controller('loginCtrl', function ($scope,$location,$rootScope) {
        $scope.submit = function () {
            

            if ($scope.username == 'admin' && $scope.password == 'admin') {
                $rootScope.LoggedIn = true;
                $location.path('/Questions')
            }
            else {
                alert('Foute gebruikersnaam/wachtwoord')
            }
        }
    })