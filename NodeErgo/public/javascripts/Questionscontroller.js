﻿(function () {
    var App = angular.module("App");
    var MainCtrl = function ($scope, $filter, $anchorScroll, $routeParams, $location, $http) {
        $http.get('JSON/Questions.json')
            .then(function (res) {
            $scope.questionlist = res.data;
        });
        
        $http.get('JSON/Answers.json')
            .then(function (res) {
            $scope.results  = res.data;
        });
        
        $scope.checkAll = function () {
            if ($scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
            }
            angular.forEach($scope.questionlist, function (item) {
                angular.forEach(item.Question, function (choice) {
                    choice.checked = $scope.selectedAll;
                });
            });
        }
        

        $scope.NextStepBool = false;
        $scope.ISChecked = function (Sub) 
        {
            for (count3 = 0; count3 < $scope.questionlist.length; count3++) 
                {
                    if ($scope.questionlist[count3].Subdomain == Sub) 
                        {
                            for (count4 = 0; count4 < $scope.questionlist[count3].Question.length ; count4++) 
                                {
                                         if ($scope.questionlist[count3].Question[count4].checked != false)
                                         {
                                                return true;
                                             }
                                }
                        }
                }
        }
        
        $scope.button1 = "Volgende stap";
        $scope.button2 = "indienen";
        
        $scope.NextStep = function () {
            $scope.NextStepBool = true;
            $('html,body').scrollTop(0);
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
            $scope.results.totaal = Math.round(total* 100) / 100;
            $scope.results.subtotalGezondheid = Math.round(subs[0] * 100) / 100;
            $scope.results.subtotalRelaties = Math.round(subs[1] * 100) / 100;
            $scope.results.subtotalIdentiteit = Math.round(subs[2] * 100) / 100;
            $scope.results.subtotalUitdagingIntresse = Math.round(subs[3] * 100) / 100;
            
            $http.post('/results/testResults', $scope.questionlist);
            $http.post('/results/testScore' , $scope.results);
            
            $location.path("/Endscreen");
        }
        
        var test2 = false;
        $scope.CheckboxChecked = function (test) {
            if (test == true) {
                test2 = true;
                return false;
            }
            else if (test == false && test2 == true) {
                return false;
            }
            else
                return true;
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