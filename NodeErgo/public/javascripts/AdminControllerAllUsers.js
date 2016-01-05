(function () {
    var App = angular.module("App");
    var AdminAllusersCtrl = function ($scope, $location, $http) {
        
        var r = $.Deferred();
        var s = $.Deferred();       
        r.done(F2);
        s.done(F3);
        var AdminCounter = 0;
        var count3 = 0;
        var subGezondheidNietsingevuld = 0;
        var subIdentiteitNietsingevuld = 0;
        var subRelatiesNietsingevuld = 0;
        var subUitdagingNietsingevuld = 0;
        var TotaalScoreNietsingevuld = 0;
                
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
                                    subGezondheidNietsingevuld++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
                                }

                                if ($scope.scorelist.subIdentiteit != null) {
                                    $scope.scorelistAll.subIdentiteit += $scope.scorelist.subIdentiteit
                                }
                                else {
                                    subIdentiteitNietsingevuld++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
                                }

                                if ($scope.scorelist.subRelaties != null) {
                                    $scope.scorelistAll.subRelaties += $scope.scorelist.subRelaties
                                }
                                else {
                                    subRelatiesNietsingevuld++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
                                }
                                if ($scope.scorelist.subUitdaging != null) {
                                    $scope.scorelistAll.subUitdaging += $scope.scorelist.subUitdaging
                                }
                                else {
                                    subUitdagingNietsingevuld++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
                                }
                                if ($scope.scorelist.TotaalScore != null) {
                                    $scope.scorelistAll.TotaalScore += $scope.scorelist.TotaalScore
                                }
                                else {
                                    TotaalScoreNietsingevuld++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
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
            $scope.scorelistAll.subGezondheid = $scope.scorelistAll.subGezondheid / ($scope.Userlist.length - AdminCounter - subGezondheidNietsingevuld);
            $scope.scorelistAll.subIdentiteit = $scope.scorelistAll.subIdentiteit / ($scope.Userlist.length - AdminCounter - subIdentiteitNietsingevuld);
            $scope.scorelistAll.subRelaties = $scope.scorelistAll.subRelaties / ($scope.Userlist.length - AdminCounter - subRelatiesNietsingevuld);
            $scope.scorelistAll.subUitdaging = $scope.scorelistAll.subUitdaging / ($scope.Userlist.length - AdminCounter - subUitdagingingevuld);
            $scope.scorelistAll.TotaalScore = $scope.scorelistAll.TotaalScore / ($scope.Userlist.length - AdminCounter - TotaalScoreNietsingevuld);
        }
        
       
        

        $scope.back = function () {
            $location.path("/");
        }
    };
    App.controller("AdminAllusersCtrl", AdminAllusersCtrl);
})();