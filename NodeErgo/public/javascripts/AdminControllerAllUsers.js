(function () {
    var App = angular.module("App");
    var AdminAllusersCtrl = function ($scope, $location, $http) {
        
        $scope.gender = "NoFilter";
        $scope.diploma = "NoFilter";
        $scope.BurgS = "NoFilter";
        $scope.Origine = "NoFilter";
        $scope.werkstatus = "NoFilter";
        
        $scope.Kinderen = false;
        $scope.Leeftijd = false;

        $scope.KinderenMax = 5;
        $scope.KinderenMin = 0;
        $scope.KinderenPrevMax = 5;
        $scope.KinderenPrevMin = 0;
        $scope.LeeftijdMax = 100;
        $scope.LeeftijdMin = 0;
        $scope.LeeftijdPrevMax = 100;
        $scope.LeeftijdPrevMin = 0;
        
        $scope.UserAfterfilter = 0;
        
        $scope.ShowGeslacht = false;
        $scope.ShowDiploma = false;
        $scope.ShowBurgS = false;
        $scope.ShowOrigine = false;
        $scope.ShowWerkS = false;
        $scope.ShowKind = false;
        $scope.ShowAge = false;
        
        var Togglefilters = false;
        var Admincount = 0;

        var Signal = signals.Signal;
        var myObject2 = {
            started: new Signal(),
            stopped: new Signal()
        };
        myObject2.started.add(function () {
            $scope.Filter();
        });

        var myObject = {
            started: new Signal(),
            stopped: new Signal()
        };
        myObject.started.add(function () {
            ToScreen(scorelistCalc, scorelistCalcNietsingevuld);
        });
        
                
        var Userlist;
        var scorelist;
        var filterlist;
        
        var scorelistCalc = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
        var scorelistCalcNietsingevuld = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
        $scope.scorelistAll = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };

        $http.get('admin/users')
            .then(function (res) {
            Userlist = res.data;
            myObject2.started.dispatch();
            });  
        
        $scope.Filter = function ()
        {
            var count = 0;
            scorelistCalcNietsingevuld = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
            scorelistCalc = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
            

            filterlist = $(Userlist).filter(function (i, n) { return n.Admin === false });
            Admincount = Userlist.length - filterlist.length;
            if($scope.gender != "NoFilter")
                filterlist = $(filterlist).filter(function (i, n) { return n.geslacht === $scope.gender });
            if ($scope.diploma != "NoFilter")
                filterlist = $(filterlist).filter(function (i, n) { return n.diploma === $scope.diploma });
            if ($scope.BurgS != "NoFilter")
                filterlist = $(filterlist).filter(function (i, n) { return n.burg_statuut  === $scope.BurgS  });
            if ($scope.Origine != "NoFilter")
                filterlist = $(filterlist).filter(function (i, n) { return n.huidskleur === $scope.Origine });
            if ($scope.werkstatus != "NoFilter")
                filterlist = $(filterlist).filter(function (i, n) { return n.werkstatus === $scope.werkstatus });
            if ($scope.Kinderen != false) {
                $scope.KinderenPrevMax = $scope.KinderenMax;
                $scope.KinderenPrevMin = $scope.KinderenMin;
                filterlist = $(filterlist).filter(function (i, n) { return $scope.KinderenMin <= n.kinderen && n.kinderen <= $scope.KinderenMax });
            }
            if ($scope.Leeftijd != false) {
                $scope.LeeftijdPrevMax = $scope.LeeftijdMax;
                $scope.LeeftijdPrevMin = $scope.LeeftijdMin;
                filterlist = $(filterlist).filter(function (i, n) { return $scope.LeeftijdMin <= n.age && n.age <= $scope.LeeftijdMax });
            }
                


        for (var i = 0; i < filterlist.length; i++) {
                $http.get("/admin/users/" + filterlist[i]._id + "/score")
                            .then(function (res) {
                    scorelist = res.data;
                    calculateFilterScore();
                    count++
                    if (count == filterlist.length)
                            myObject.started.dispatch();
                });
            }
            if (filterlist.length == 0) { 
                $scope.scorelistAll.subGezondheid = "n.v.t.";
                $scope.scorelistAll.subIdentiteit = "n.v.t.";
                $scope.scorelistAll.subRelaties = "n.v.t.";
                $scope.scorelistAll.subUitdaging = "n.v.t.";
                $scope.scorelistAll.TotaalScore = "n.v.t.";
            }
        }
        
        function calculateFilterScore() { 
            if (scorelist.subGezondheid != null) {
                scorelistCalc.subGezondheid += scorelist.subGezondheid
            }
            else {
                scorelistCalcNietsingevuld.subGezondheid++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            
            if (scorelist.subIdentiteit != null) {
                scorelistCalc.subIdentiteit += scorelist.subIdentiteit
            }
            else {
                scorelistCalcNietsingevuld.subIdentiteit++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            
            if (scorelist.subRelaties != null) {
                scorelistCalc.subRelaties += scorelist.subRelaties
            }
            else {
                scorelistCalcNietsingevuld.subRelaties++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            if (scorelist.subUitdaging != null) {
                scorelistCalc.subUitdaging += scorelist.subUitdaging
            }
            else {
                scorelistCalcNietsingevuld.subUitdaging++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }
            if (scorelist.totaalScore != null) {
                scorelistCalc.TotaalScore += scorelist.totaalScore
            }
            else {
                scorelistCalcNietsingevuld.TotaalScore++         //als een user geen subtotaal heeft voor deze score mag deze ook niet op geteld worden bij het totaal aantal gebruikers.
            }      
        }
        
        function ToScreen(scorelistCalc, scorelistCalcNietsingevuld) {
            $scope.Precent = filterlist.length / (Userlist.length - Admincount)* 100;
            $scope.UserAfterfilter = filterlist.length;
            $scope.scorelistAll.subGezondheid = Math.round(scorelistCalc.subGezondheid / (filterlist.length - scorelistCalcNietsingevuld.subGezondheid) * 100) / 100;
            $scope.scorelistAll.subIdentiteit = Math.round(scorelistCalc.subIdentiteit / (filterlist.length - scorelistCalcNietsingevuld.subIdentiteit) * 100) / 100;
            $scope.scorelistAll.subRelaties = Math.round(scorelistCalc.subRelaties / (filterlist.length - scorelistCalcNietsingevuld.subRelaties) * 100) / 100;
            $scope.scorelistAll.subUitdaging = Math.round(scorelistCalc.subUitdaging / (filterlist.length -scorelistCalcNietsingevuld.subUitdaging) * 100) / 100;
            $scope.scorelistAll.TotaalScore = Math.round(scorelistCalc.TotaalScore / (filterlist.length - scorelistCalcNietsingevuld.TotaalScore) * 100) / 100;
        }
        
        
        
        $scope.ToggleShowGeslacht = function () {
            $scope.ShowGeslacht = !$scope.ShowGeslacht;
        }
        $scope.ToggleShowDiploma = function () {
            $scope.ShowDiploma = !$scope.ShowDiploma;
        }
        $scope.ToggleShowBurgS = function () {
            $scope.ShowBurgS = !$scope.ShowBurgS;
        }
        $scope.ToggleShowOrigine = function () {
            $scope.ShowOrigine= !$scope.ShowOrigine;
        }
        $scope.ToggleShowWerkS = function () {
            $scope.ShowWerkS = !$scope.ShowWerkS;
        }
        $scope.ToggleShowKind = function () {
            $scope.ShowKind = !$scope.ShowKind;
        }
        $scope.ToggleShowAge = function () {
            $scope.ShowAge = !$scope.ShowAge;
        }
        $scope.ToggleShowAll = function () {
            if (Togglefilters == true) {
                Togglefilters = false;
                $scope.ShowAge = false;
                $scope.ShowKind = false;
                $scope.ShowWerkS = false;
                $scope.ShowOrigine = false;
                $scope.ShowBurgS = false;
                $scope.ShowDiploma = false;
                $scope.ShowGeslacht = false;
            }
            else {
                Togglefilters = true;
                $scope.ShowAge = true;
                $scope.ShowKind = true;
                $scope.ShowWerkS = true;
                $scope.ShowOrigine = true;
                $scope.ShowBurgS = true;
                $scope.ShowDiploma = true;
                $scope.ShowGeslacht = true;
            }

        }

        $scope.back = function () {
            $location.path("/");
        }

    };
    App.controller("AdminAllusersCtrl", AdminAllusersCtrl);
})();