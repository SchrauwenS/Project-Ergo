﻿<!DOCTYPE html>
<html>
<head>
    <title></title>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.4/angular.min.js"></script>
  	<meta charset="utf-8" />

    <script>

        
        var app = angular.module("app", []);
        app.controller("LoginVenster", function ($scope) {
            $scope.changetext = function () {
                $scope.text = $scope.InputText;

            };
          

       
        });

    </script>

</head>
<body ng-app="app">
    <div ng-controller="LoginVenster">
        <label>Username</label>
        <input type="text" ng-model="InputText" />
        <label>paswoord</label>
        <input type="password" ng-model="InputText" />
        <button ng-click="Login()"> Login</button>
        <button ng-click="Register()"> Registreren</button>
    </div>
</body>
</html>
