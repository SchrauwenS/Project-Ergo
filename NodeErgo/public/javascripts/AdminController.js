(function () {
    var App = angular.module("App");
    var AdminCtrl = function ($scope, $routeParams, $location, $http) {
        
        $http.get('users')
            .then(function (res) {
            $scope.Userlist = res.data;
        });
    };
    App.controller("AdminCtrl", AdminCtrl);
    
})();