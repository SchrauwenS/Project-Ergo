(function () {
    var App = angular.module("App");
    var AdminCtrl = function ($scope, $routeParams, $location, $http) {
        
        $http.get('admin/users')
            .then(function (res) {
            $scope.Userlist = res.data;
        });
        
        $http.get('user/userinfo')
            .then(function (res) {
            $scope.userinfo = res.data;
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
        
        $scope.back = function () {
            $location.path("/");
        }

        
        $scope.excel = function (name, vragenlist, userinfo, scorelist) {
            
            var CSV = "Gebruikersrapport " + name + '\r\n\n';         
            
            for (var index in userinfo) {
                if (index != "_id" && index != "salt" && index != "hashed_pwd" && index != "__v" && index != "$$hashKey") {
                    row = index + " " + userinfo[index];
                    //add a line break after each row
                    CSV += row + '\r\n';
                }

            }
            
            CSV += '\r\n\r\n\r\n';
            
            for (var index in scorelist) {
                if (index != "_id" && index != "user") {
                    row = index + " " + scorelist[index];
                    //add a line break after each row
                    CSV += row + '\r\n';
                }
            }
            
            CSV += '\r\n\r\n\r\n';

            for (count = 0; count < vragenlist[0].vragen.length ; count++) {
                    row = vragenlist[0].vragen[count].text;
                    //add a line break after each row
                CSV += row + '\r\n';
                
                if (vragenlist[0].vragen[count].score == null)
                    row = "ONBEANTWOORD";
                if (vragenlist[0].vragen[count].score == "1")
                    row = "ALTIJD MINDER dan ik wil";               
                if (vragenlist[0].vragen[count].score == "2")
                    row = "SOMS MINDER dan ik wil";
                if (vragenlist[0].vragen[count].score == "3")
                    row = "ONGEVEER IDEAAL voor mij";
                if (vragenlist[0].vragen[count].score == "4")
                    row = "SOMS MEER dan ik wil";
                if (vragenlist[0].vragen[count].score == "5")
                    row = "ALTIJD MEER dan ik wil";        
                //add a line break after each row
                CSV += row + '\r\n';
                CSV += '\r\n';
                
            }            
            
            //Generate a file name
            var fileName = "Gebruikersrapport " + name;
            
            //Initialize file format you want csv or xls
            var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
            
            // Now the little tricky part.
            // you can use either>> window.open(uri);
            // but this will not work in some browsers
            // or you will not get the correct file extension    
            
            //this trick will generate a temp <a /> tag
            var link = document.createElement("a");
            link.href = uri;
            
            //set the visibility hidden so it will not effect on your web-layout
            link.style = "visibility:hidden";
            link.download = fileName + ".csv";
            
            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };
    App.controller("AdminCtrl", AdminCtrl);
    
})();