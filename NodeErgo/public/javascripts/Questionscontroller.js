(function () {
    var App = angular.module("App");
    var MainCtrl = function ($scope, $routeParams, $location, $http) {
        $http.get('JSON/Questions.json')
            .then(function (res) {
            $scope.questionlist = res.data;
        });
        
        $http.get('JSON/Answers.json')
            .then(function (res) {
            $scope.results  = res.data;
        });
                 
        $scope.NextStepBool = false;
        
        $scope.button1 = "Volgende stap";
        $scope.button2 = "indienen";
        
        $scope.NextStep = function () {
            $scope.NextStepBool = true;
        }
        $scope.NextStep2 = function () {
            var total = 0;
            var subtotal = 0;
            var totalempty = 0;
            var subempty = 0;
            var subs = [];
            
            for (count = 0; count < $scope.questionlist.length; count++) {
                for (count2 = 0; count2 < $scope.questionlist[count].Question.length; count2++) {
                    if ($scope.questionlist[count].Question[count2].Quoting != null) {
                        if ($scope.questionlist[count].Question[count2].Quoting < 4) {
                            subtotal += $scope.questionlist[count].Question[count2].Quoting;
                        }
                        else {
                            subtotal += ($scope.questionlist[count].Question[count2].Quoting - 3);
                        }
                    }  
                    else
                        subempty++
                }
                total += subtotal;
                totalempty += subempty
                subs[count] = subtotal / (count2 - subempty);
                subempty = 0;
                subtotal = 0;


               }
            
            total = total / (53 - totalempty)
            $scope.results.totaal = total;
            $scope.results.subtotalGezondheid = subs[0];
            $scope.results.subtotalRelaties = subs[1];
            $scope.results.subtotalIdentiteit = subs[2];
            $scope.results.subtotalUitdagingIntresse = subs[3];
            
            $http.post('/results/testResults', $scope.questionlist)
            $http.post('/results/testScore' , $scope.results)

        }
        
        
        $scope.radioValue = "radioValue";
        $scope.radioData = [{
                Rating: "ALTIJD MINDER dan ik wil",
                value: 1
            }, {
                Rating: "SOMS MINDER dan ik wil",
                value: 2
            }, {
                Rating: "ONGEVEER IDEAAL voor mij",
                value: 3
            }, {
                Rating: "SOMS MEER dan ik wil",
                value: 5
            }, {
                Rating: "ALTIJD MEER dan ik wil",
                value: 4
            }
        ]

    };
    
    App.controller("MainCtrl", MainCtrl);

})();