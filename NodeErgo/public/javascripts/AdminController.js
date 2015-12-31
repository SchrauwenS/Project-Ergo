(function () {
    var App = angular.module("App");
    var AdminCtrl = function ($scope, $window, $routeParams, $location, $http) {
        
        $http.get('admin/users')
            .then(function (res) {
            $scope.Userlist = res.data;
        });
        
        $http.get('user/userinfo')
            .then(function (res) {
            $scope.userinfo= res.data;
        });

        $scope.GetData = function () {
            $http.get("admin/users/" + $scope.selectedUSER[0]._id + "/score")
                    .then(function (res) {
                $scope.scorelist = res.data;
            });
            $http.get("admin/users/" + $scope.selectedUSER[0]._id + "/survey")
                    .then(function (res) {
                $scope.vragenlist = res.data;
            });
        }
        
        $scope.AlgemeneAccountinstellingen = function () {
            $location.path("/AlgemeneAccountinstellingen");
        }
        
        $scope.logout = function(){
            var url = "http://" + $window.location.host + "/logout";
            $window.location.href = url;
        }
    };
    App.controller("AdminCtrl", AdminCtrl);
    
})();