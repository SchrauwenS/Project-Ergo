(function () {
    var App = angular.module("App");
    var AdminAllusersCtrl = function ($scope, $location, $http) {
        
        var r = $.Deferred();
        r.done(Filter);
        var s = $.Deferred();
        s.done(ToScreen);     
        
        var Userlist;
        var scorelist;
        var filterlist;
        
        var scorelistCalc = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
        var scorelistCalcNietsingevuld = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
        $scope.scorelistAll = { subGezondheid: 0, subIdentiteit: 0, subRelaties: 0, subUitdaging: 0, TotaalScore: 0 };
        
        
        $http.get('admin/users')
            .then(function (res) {
            Userlist = res.data;
            r.resolve();
            });  
        
        function Filter()
        {
        filterlist = $(Userlist).filter(function (i, n) { return n.geslacht === 'Male' && n.Admin === false });
            var count = 0;

        for (var i = 0; i < filterlist.length; i++) {
                $http.get("/admin/users/" + filterlist[i]._id + "/score")
                            .then(function (res) {
                    scorelist = res.data;
                    calculateFilterScore();
                    count++
                    if (count == filterlist.length)
                        s.resolve(scorelistCalc, scorelistCalcNietsingevuld);           
                });
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
                                                            
            $scope.scorelistAll.subGezondheid = Math.round(scorelistCalc.subGezondheid / (filterlist.length - scorelistCalcNietsingevuld.subGezondheid)* 100)/ 100;
            $scope.scorelistAll.subIdentiteit = Math.round(scorelistCalc.subIdentiteit / (filterlist.length - scorelistCalcNietsingevuld.subIdentiteit) * 100) / 100;
            $scope.scorelistAll.subRelaties = Math.round(scorelistCalc.subRelaties / (filterlist.length - scorelistCalcNietsingevuld.subRelaties) * 100) / 100;
            $scope.scorelistAll.subUitdaging = Math.round(scorelistCalc.subUitdaging / (filterlist.length -scorelistCalcNietsingevuld.subUitdaging) * 100) / 100;
            $scope.scorelistAll.TotaalScore = Math.round(scorelistCalc.TotaalScore / (filterlist.length - scorelistCalcNietsingevuld.TotaalScore) * 100) / 100;
        }
        

        $scope.back = function () {
            $location.path("/");
        }
    };
    App.controller("AdminAllusersCtrl", AdminAllusersCtrl);
})();