(function () {
    var App = angular.module("App");
    var AACtrl = function ($scope, $routeParams,$http) {
        
        $http.get('user/userinfo')
            .then(function (res) {
            $scope.userinfo = res.data;
        });
    };
    App.controller("AACtrl", AACtrl);
    
})();