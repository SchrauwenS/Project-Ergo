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
        $scope.scorelistAll = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
        $scope.scorelistAllNietsingevuld = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };

            $http.get('admin/users')
            .then(function (res) {
                $scope.Userlist = res.data;
                r.resolve();
            });  
        
        function All() { 
            if ($scope.scorelist.subGezondheid != null) {
                $scope.scorelistAll.subGezondheid += $scope.scorelist.subGezondheid
            }
            else {
                $scope.scorelistAllNietsingevuld.subGezondheid++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            
            if ($scope.scorelist.subIdentiteit != null) {
                $scope.scorelistAll.subIdentiteit += $scope.scorelist.subIdentiteit
            }
            else {
                $scope.scorelistAllNietsingevuld.subIdentiteit++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            
            if ($scope.scorelist.subRelaties != null) {
                $scope.scorelistAll.subRelaties += $scope.scorelist.subRelaties
            }
            else {
                $scope.scorelistAllNietsingevuld.subRelaties++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            if ($scope.scorelist.subUitdaging != null) {
                $scope.scorelistAll.subUitdaging += $scope.scorelist.subUitdaging
            }
            else {
                $scope.scorelistAllNietsingevuld.subUitdaging++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            if ($scope.scorelist.totaalScore != null) {
                $scope.scorelistAll.TotaalScore += $scope.scorelist.totaalScore
            }
            else {
                $scope.scorelistAllNietsingevuld.TotaalScore++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            count3++             //we tellen de niet admins zodat onderstaande functie pas wordt uitgevoerd als de gegevens van de laatste gebruiker zijn ingelezen
            if (count3 == ($scope.Userlist.length - AdminCounter)) { //in Userlist zitten ook admins deze eerst aftrekken.
                s.resolve();
            }
        }
        function Sex() {
            if ($scope.scorelist.subGezondheid != null) {
                $scope.scorelistAll.subGezondheid += $scope.scorelist.subGezondheid
            }
            else {
                $scope.scorelistAllNietsingevuld.subGezondheid++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            
            if ($scope.scorelist.subIdentiteit != null) {
                $scope.scorelistAll.subIdentiteit += $scope.scorelist.subIdentiteit
            }
            else {
                $scope.scorelistAllNietsingevuld.subIdentiteit++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            
            if ($scope.scorelist.subRelaties != null) {
                $scope.scorelistAll.subRelaties += $scope.scorelist.subRelaties
            }
            else {
                $scope.scorelistAllNietsingevuld.subRelaties++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            if ($scope.scorelist.subUitdaging != null) {
                $scope.scorelistAll.subUitdaging += $scope.scorelist.subUitdaging
            }
            else {
                $scope.scorelistAllNietsingevuld.subUitdaging++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            if ($scope.scorelist.totaalScore != null) {
                $scope.scorelistAll.TotaalScore += $scope.scorelist.totaalScore
            }
            else {
                $scope.scorelistAllNietsingevuld.TotaalScore++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            count3++             //we tellen de niet admins zodat onderstaande functie pas wordt uitgevoerd als de gegevens van de laatste gebruiker zijn ingelezen
            if (count3 == ($scope.Userlist.length - AdminCounter)) { //in Userlist zitten ook admins deze eerst aftrekken.
                s.resolve();
            }
        }

        function F2() {
            for (count = 0 ; count < $scope.Userlist.length; count++) {
                if ($scope.Userlist[count].Admin == false) {
                    $http.get("/admin/users/" + $scope.Userlist[count]._id + "/score")
                            .then(function (res) {
                        $scope.scorelist = res.data;
                            All();
                        
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
        

        $scope.back = function () {
            $location.path("/");
        }
    };
    App.controller("AdminAllusersCtrl", AdminAllusersCtrl);
})();