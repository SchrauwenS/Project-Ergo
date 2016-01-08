//(function () {
//    var App = angular.module("App");
//    var AdminAllusersCtrl = function ($scope, $location, $http) {
        
//        var r = $.Deferred();
//        var s = $.Deferred();  
//        r.done(F2);
//        s.done(F3);
//        var AdminCounter = 0;
//        var count3 = 0;
//        var count4 = 0;
//        var count5 = 0;
//        $scope.scorelistAll = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
//        $scope.scorelistAllNietsingevuld = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
//        $scope.scorelistMale = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
//        $scope.scorelistMaleNietsingevuld = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
//        $scope.scorelistFemale = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
//        $scope.scorelistFemaleNietsingevuld = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };

//            $http.get('admin/users')
//            .then(function (res) {
//                $scope.Userlist = res.data;
//                r.resolve();
//            });  
        
//        function All(scorelist) { 
//            if (scorelist.subGezondheid != null) {
//                $scope.scorelistAll.subGezondheid += scorelist.subGezondheid
//            }
//            else {
//                $scope.scorelistAllNietsingevuld.subGezondheid++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
//            }
            
//            if (scorelist.subIdentiteit != null) {
//                $scope.scorelistAll.subIdentiteit += scorelist.subIdentiteit
//            }
//            else {
//                $scope.scorelistAllNietsingevuld.subIdentiteit++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
//            }
            
//            if (scorelist.subRelaties != null) {
//                $scope.scorelistAll.subRelaties += scorelist.subRelaties
//            }
//            else {
//                $scope.scorelistAllNietsingevuld.subRelaties++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
//            }
//            if (scorelist.subUitdaging != null) {
//                $scope.scorelistAll.subUitdaging += scorelist.subUitdaging
//            }
//            else {
//                $scope.scorelistAllNietsingevuld.subUitdaging++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
//            }
//            if (scorelist.totaalScore != null) {
//                $scope.scorelistAll.TotaalScore += scorelist.totaalScore
//            }
//            else {
//                $scope.scorelistAllNietsingevuld.TotaalScore++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
//            }
//            count3++             //we tellen de niet admins zodat onderstaande functie pas wordt uitgevoerd als de gegevens van de laatste gebruiker zijn ingelezen
//            if (count3 + count5 == ($scope.Userlist.length - AdminCounter)) { //in Userlist zitten ook admins deze eerst aftrekken.
//                $scope.scorelistAllNietsingevuld.subRelaties += count5
//                $scope.scorelistAllNietsingevuld.subIdentiteit += count5
//                $scope.scorelistAllNietsingevuld.subGezondheid += count5
//                $scope.scorelistAllNietsingevuld.subUitdaging += count5
//                $scope.scorelistAllNietsingevuld.TotaalScore += count5
//                s.resolve($scope.scorelistAll, $scope.scorelistAllNietsingevuld);
//            }
//        }
//        function Sex(scorelist) {
//            if (true) { 
//                if (scorelist.subGezondheid != null) {
//                    $scope.scorelistMale.subGezondheid += scorelist.subGezondheid
//                }
//                else {
//                    $scope.scorelistMaleNietsingevuld.subGezondheid++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
//                }
                
//                if (scorelist.subIdentiteit != null) {
//                    $scope.scorelistMale.subIdentiteit += scorelist.subIdentiteit
//                }
//                else {
//                    $scope.scorelistMaleNietsingevuld.subIdentiteit++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
//                }
                
//                if (scorelist.subRelaties != null) {
//                    $scope.scorelistMale.subRelaties += scorelist.subRelaties
//                }
//                else {
//                    $scope.scorelistMaleNietsingevuld.subRelaties++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
//                }
//                if (scorelist.subUitdaging != null) {
//                    $scope.scorelistMale.subUitdaging += scorelist.subUitdaging
//                }
//                else {
//                    $scope.scorelistMaleNietsingevuld.subUitdaging++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
//                }
//                if (scorelist.totaalScore != null) {
//                    $scope.scorelistMale.TotaalScore += scorelist.totaalScore
//                }
//                else {
//                    $scope.scorelistMaleNietsingevuld.TotaalScore++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
//                }
//                count3++             //we tellen de niet admins zodat onderstaande functie pas wordt uitgevoerd als de gegevens van de laatste gebruiker zijn ingelezen
//                if ((count3+count4) == ($scope.Userlist.length - AdminCounter)) { //in Userlist zitten ook admins deze eerst aftrekken.
//                    $scope.scorelistMaleNietsingevuld.subRelaties += count4
//                    $scope.scorelistMaleNietsingevuld.subIdentiteit += count4
//                    $scope.scorelistMaleNietsingevuld.subGezondheid += count4
//                    $scope.scorelistMaleNietsingevuld.subUitdaging += count4
//                    $scope.scorelistMaleNietsingevuld.TotaalScore += count4
//                    s.resolve($scope.scorelistMale, $scope.scorelistMaleNietsingevuld);
//                }
//            }
//        }

//        function F2() {
//            for (count = 0 ; count < $scope.Userlist.length; count++) {
//                if ($scope.Userlist[count].Admin == false) {
//                    if (false) {
//                    $http.get("/admin/users/" + $scope.Userlist[count]._id + "/score")
//                            .then(function (res) {
//                            var scorelist = res.data;
//                            All(scorelist); 
//                        });
//                    }
//                    if (true) {
//                        if ($scope.Userlist[count].geslacht == "Male") {
//                            $http.get("/admin/users/" + $scope.Userlist[count]._id + "/score")
//                            .then(function (res) {
//                                var scorelist = res.data;
//                                All(scorelist);
//                            });
//                        }
//                        else { 
//                        count5++
//                        }   
//                    }
//                    if (true) {
//                        if ($scope.Userlist[count].geslacht == "Female") {
//                            $http.get("/admin/users/" + $scope.Userlist[count]._id + "/score")
//                            .then(function (res) {
//                                var scorelist = res.data;
//                                Sex(scorelist);
//                            });
//                        }
//                        else {
//                            count4++
//                        }  
//                    }
//                    }     
//                else {
//                        AdminCounter++;
//                }
//            }
//            }

//        function F3(scorelist, scorelistNietsingevuld) {
                     
//            scorelist.subGezondheid = Math.round(scorelist.subGezondheid / ($scope.Userlist.length - AdminCounter - scorelistNietsingevuld.subGezondheid)* 100)/ 100;
//            scorelist.subIdentiteit = Math.round(scorelist.subIdentiteit / ($scope.Userlist.length - AdminCounter - scorelistNietsingevuld.subIdentiteit) * 100) / 100;
//            scorelist.subRelaties = Math.round(scorelist.subRelaties / ($scope.Userlist.length - AdminCounter - scorelistNietsingevuld.subRelaties) * 100) / 100;
//            scorelist.subUitdaging = Math.round(scorelist.subUitdaging / ($scope.Userlist.length - AdminCounter -scorelistNietsingevuld.subUitdaging) * 100) / 100;
//            scorelist.TotaalScore = Math.round(scorelist.TotaalScore / ($scope.Userlist.length - AdminCounter - scorelistNietsingevuld.TotaalScore) * 100) / 100;
//        }

//        //function F4() {
//        //    for (count = 0 ; count < $scope.Userlist.length; count++) {
//        //        if ($scope.Userlist[count].Admin == false) {
//        //            if ($scope.Userlist[count].geslacht == "Male") { 
//        //                $http.get("/admin/users/" + $scope.Userlist[count]._id + "/score")
//        //                    .then(function (res) {
//        //                    var scorelist = res.data;
//        //                    Sex(scorelist);
//        //                });
//        //            }
//        //        }
//        //        else {
//        //            AdminCounter++
//        //        }
//        //    }
//        //}
        

//        $scope.back = function () {
//            $location.path("/");
//        }
//    };
//    App.controller("AdminAllusersCtrl", AdminAllusersCtrl);
//})();