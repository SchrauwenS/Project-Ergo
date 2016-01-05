(function () {
    var App = angular.module("App");
    var AdminAllusersCtrl = function ($scope, $location, $http) {
        
        var r = $.Deferred();
        var s = $.Deferred();
        //var t = $.Deferred();         
        r.done(F2);
        s.done(F3);
        //t.done(F4);
        var AdminCounter = 0;
        var count3 = 0;
        var Nietingevuld = 0;
                
            $http.get('admin/users')
            .then(function (res) {
                $scope.Userlist = res.data;
                r.resolve();
            });
        
        
        function F2() {
            $scope.scorelistAll = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };             
            for (count = 0 ; count < $scope.Userlist.length; count++) {
                if ($scope.Userlist[count].Admin == false) {
                    $http.get("/admin/users/" + $scope.Userlist[count]._id + "/score")
                            .then(function (res) {
                        $scope.scorelist = res.data;
                        if ($scope.scorelist.subGezondheid != null) {
                            $scope.scorelistAll.subGezondheid += $scope.scorelist.subGezondheid
                        }
                        else {
                            Nietingevuld++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
                        }                  
                        count3++             //we tellen de niet admins zodat onderstaande functie pas wordt uitgevoerd als de gegevens van de laatste gebruiker zijn ingelezen
                        if (count3 == ($scope.Userlist.length-AdminCounter)) { //in Userlist zitten ook admins deze eerst aftrekken.
                        s.resolve();
                        }
                    });
                }
                else {
                    AdminCounter++
                }
            }
        }
        

        function F3() {          
            $scope.scorelistAll.subGezondheid = $scope.scorelistAll.subGezondheid / ($scope.Userlist.length - AdminCounter -Nietingevuld);
            //scorelist.subIdentiteit =+
            //scorelist.subRelaties
            //scorelist.subUitdaging
            //scorelist.TotaalScore
        }
        
       
        

        $scope.back = function () {
            $location.path("/");
        }
    };
    App.controller("AdminAllusersCtrl", AdminAllusersCtrl);
})();