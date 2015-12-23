(function () {
    var App = angular.module("App");
    var AdminCtrl = function ($scope, $routeParams, $location, $http) {
        
        $http.get('admin/users')
            .then(function (res) {
            $scope.Userlist = res.data;
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
           
                    
    };
    App.controller("AdminCtrl", AdminCtrl);
    
})();