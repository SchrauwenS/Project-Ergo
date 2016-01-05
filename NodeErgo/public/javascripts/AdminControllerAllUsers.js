(function () {
    var App = angular.module("App");
    var AdminAllusersCtrl = function ($scope, $location, $http) {
        
        $http.get('admin/users')
            .then(function (res) {
            $scope.Userlist = res.data;
        });
        


        $scope.back = function () {
            $location.path("/");
        }
    };
    App.controller("AdminAllusersCtrl", AdminAllusersCtrl);
})();