(function () {
    var App = angular.module("App");
    var AdminAllusersCtrl = function ($scope, $location, $http) {
        
        var r = $.Deferred();
        var s = $.Deferred();       
        r.done(F2,F4);
        s.done(F3);
        var AdminCounter = 0;
        var count3 = 0;
        $scope.scorelistAll = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
        $scope.scorelistAllNietsingevuld = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
        $scope.scorelistMale = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
        $scope.scorelistMaleNietsingevuld = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
        $scope.scorelistFemale = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
        $scope.scorelistFemaleNietsingevuld = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };

            $http.get('admin/users')
            .then(function (res) {
                $scope.Userlist = res.data;
                r.resolve();
            });  
        
        function All(scorelist) { 
            if (scorelist.subGezondheid != null) {
                $scope.scorelistAll.subGezondheid += scorelist.subGezondheid
            }
            else {
                $scope.scorelistAllNietsingevuld.subGezondheid++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            
            if (scorelist.subIdentiteit != null) {
                $scope.scorelistAll.subIdentiteit += scorelist.subIdentiteit
            }
            else {
                $scope.scorelistAllNietsingevuld.subIdentiteit++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            
            if (scorelist.subRelaties != null) {
                $scope.scorelistAll.subRelaties += scorelist.subRelaties
            }
            else {
                $scope.scorelistAllNietsingevuld.subRelaties++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            if (scorelist.subUitdaging != null) {
                $scope.scorelistAll.subUitdaging += scorelist.subUitdaging
            }
            else {
                $scope.scorelistAllNietsingevuld.subUitdaging++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            if (scorelist.totaalScore != null) {
                $scope.scorelistAll.TotaalScore += scorelist.totaalScore
            }
            else {
                $scope.scorelistAllNietsingevuld.TotaalScore++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            count3++             //we tellen de niet admins zodat onderstaande functie pas wordt uitgevoerd als de gegevens van de laatste gebruiker zijn ingelezen
            if (count3 == ($scope.Userlist.length - AdminCounter)) { //in Userlist zitten ook admins deze eerst aftrekken.
                s.resolve();
            }
        }
        function Sex(test) {
            if (test.geslacht == "Male") { 
                if ($scope.scorelist.subGezondheid != null) {
                    $scope.scorelistMale.subGezondheid += $scope.scorelist.subGezondheid
                }
                else {
                    $scope.scorelistMaleNietsingevuld.subGezondheid++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
                }
                
                if ($scope.scorelist.subIdentiteit != null) {
                    $scope.scorelistMale.subIdentiteit += $scope.scorelist.subIdentiteit
                }
                else {
                    $scope.scorelistMaleNietsingevuld.subIdentiteit++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
                }
                
                if ($scope.scorelist.subRelaties != null) {
                    $scope.scorelistMale.subRelaties += $scope.scorelist.subRelaties
                }
                else {
                    $scope.scorelistMaleNietsingevuld.subRelaties++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
                }
                if ($scope.scorelist.subUitdaging != null) {
                    $scope.scorelistMale.subUitdaging += $scope.scorelist.subUitdaging
                }
                else {
                    $scope.scorelistMaleNietsingevuld.subUitdaging++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
                }
                if ($scope.scorelist.totaalScore != null) {
                    $scope.scorelistMale.TotaalScore += $scope.scorelist.totaalScore
                }
                else {
                    $scope.scorelistMaleNietsingevuld.TotaalScore++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
                }
                count3++             //we tellen de niet admins zodat onderstaande functie pas wordt uitgevoerd als de gegevens van de laatste gebruiker zijn ingelezen
                if (count3 == ($scope.Userlist.length - AdminCounter)) { //in Userlist zitten ook admins deze eerst aftrekken.
                    s.resolve();
                }
            }
        }

        function F2() {
            for (count = 0 ; count < $scope.Userlist.length; count++) {
                if ($scope.Userlist[count].Admin == false) {
                    $http.get("/admin/users/" + $scope.Userlist[count]._id + "/score")
                            .then(function (res) {
                        var scorelist = res.data;
                            All(scorelist);
                    });
                }
                else {
                    AdminCounter++
                }
            }
        }
        function F3() {             
            $scope.scorelistAll.subGezondheid = Math.round($scope.scorelistAll.subGezondheid / ($scope.Userlist.length - AdminCounter - $scope.scorelistAllNietsingevuld.subGezondheid)* 100)/ 100;
            $scope.scorelistAll.subIdentiteit = Math.round($scope.scorelistAll.subIdentiteit / ($scope.Userlist.length - AdminCounter - $scope.scorelistAllNietsingevuld.subIdentiteit) * 100) / 100;
            $scope.scorelistAll.subRelaties = Math.round($scope.scorelistAll.subRelaties / ($scope.Userlist.length - AdminCounter - $scope.scorelistAllNietsingevuld.subRelaties) * 100) / 100;
            $scope.scorelistAll.subUitdaging = Math.round($scope.scorelistAll.subUitdaging / ($scope.Userlist.length - AdminCounter - $scope.scorelistAllNietsingevuld.subUitdaging) * 100) / 100;
            $scope.scorelistAll.TotaalScore = Math.round($scope.scorelistAll.TotaalScore / ($scope.Userlist.length - AdminCounter - $scope.scorelistAllNietsingevuld.TotaalScore) * 100) / 100;
        }
        function F4() {
            //for (count = 0 ; count < $scope.Userlist.length; count++) {
            //    if ($scope.Userlist[count].Admin == false) {
            //        $http.get("/admin/users/" + $scope.Userlist[count]._id + "/score")
            //                .then(function (res) {
            //            $scope.scorelist = res.data;
            //            ();
            //        });
            //    }
            //    else {
            //        AdminCounter++
            //    }
            //}
        }

        $scope.back = function () {
            $location.path("/");
        }
    };
    App.controller("AdminAllusersCtrl", AdminAllusersCtrl);
})();