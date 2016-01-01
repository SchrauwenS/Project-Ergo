(function () {
    var App = angular.module("App");
    var AACtrl = function ($scope, $routeParams,$http) {
        
        $scope.EmailInvallid = false;

        $http.get('user/userinfo')
            .then(function (res) {
            $scope.userinfo = res.data;
        });

        $http.get('admin/users')
            .then(function (res) {
            $scope.Userlist = res.data;
        });
        
        $scope.Emailcheck = function (test) {
            $scope.EmailInvallid = false;
          for (count = 0; count < $scope.Userlist.length; count++) {
               if ($scope.Userlist[count].email == test) {
                  $scope.EmailInvallid = true;
                }
                }
        }


    };
    App.controller("AACtrl", AACtrl);
    
})();