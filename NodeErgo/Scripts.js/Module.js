(function () {
    var App = angular.module("App", []);
    App.controller("MainCtrl", function ($scope) {
        $scope.questionlist = [
                                {
                                    "Subdomain": "Gezondheid",
                                    "Question": [
{
    "ID": 1,
    "Text": "Zorgen voor voldoende slaap",
    "checked": false,
    "Quoting": null
},
{
    "ID": 2,
    "Text": "Ontspannen/rusten",
    "checked": false,
    "Quoting": null
},
{
    "ID": 3,
    "Text": "Zorgen voor regelmatige beweging",
    "checked": false,
    "Quoting": null
},
{
    "ID": 4,
    "Text": "Voedzaam eten",
    "checked": false,
    "Quoting": null
},
{
    "ID": 5,
    "Text": "Zorgen voor eigen gezondheidsbehoeften",
    "checked": false,
    "Quoting": null
}
                                    ]
                                },
                                /* {
                                    "Subdomain": "Relaties",
                                    "Question": [
            {
                "ID": 6,
                "Text": "Tijd spenderen met familieleden",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 7,
                "Text": "Tijd spenderen met partner",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 8,
                "Text": "Tijd spenderen met vrienden",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 9,
                "Text": "Zorg dragen voor kinderen of familieleden",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 10,
                "Text": "Sexueel actief zijn",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 11,
                "Text": "Deelnemen aan groepen (verenigingen, cursussen etc.)",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 13,
                "Text": "Nieuwe mensen ontmoeten",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 14,
                "Text": "Huisdieren verzorgen",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 15,
                "Text": "Sociale contacten hebben op het werk",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 16,
                "Text": "Begeleiden van anderen (mentor)",
                "checked": false,
                "Quoting": null
            }
                                    ]
                                },
                                {
                                    "Subdomain": "Identiteit",
                                    "Question": [
            {
                "ID": 17,
                "Text": "Zorg dragen voor uw uiterlijk",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 18,
                "Text": "Uzelf ontwikkelen in uw job",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 19,
                "Text": "Deelnemen aan formele religieuze activiteiten",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 20,
                "Text": "Deelnemen aan festiviteiten, feestdagen vieren",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 21,
                "Text": "Deelnemen aan mogelijkheden tot bijscholing",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 22,
                "Text": "Deelnemen aan professionele organisaties",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 23,
                "Text": "Vrijwilligerswerk uitvoeren in de gemeenschap",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 24,
                "Text": "Deelnemen aan georganiseerde sport",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 25,
                "Text": "Koken",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 26,
                "Text": "Huishoudelijk werk uitvoeren",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 27,
                "Text": "Gaan winkelen",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 28,
                "Text": "Naar film, theater, sportieve evenementen gaan",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 29,
                "Text": "Reflecteren of mediteren",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 30,
                "Text": "Dagboek bijhouden",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 31,
                "Text": "Componeren, schrijven (muziek, gedichten etc.)",
                "checked": false,
                "Quoting": null
            }
                                    ]
                                },
                                {
                                    "Subdomain": "uitdaging/intresse",
                                    "Question": [
            {
                "ID": 32,
                "Text": "Buitenactiviteit doen",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 33,
                "Text": "Tuinieren",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 34,
                "Text": "Genieten van de natuur",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 35,
                "Text": "Plannen en organiseren van evenementen",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 36,
                "Text": "Decoreren en inrichten van ruimtes",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 37,
                "Text": "Betaalde arbeid verrichten",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 38,
                "Text": "Geld beheren (rekeningen/budget/investeringen)",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 39,
                "Text": "Naar restaurant/café gaan",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 40,
                "Text": "Hobby’s uitvoeren",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 41,
                "Text": "Muziek maken",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 42,
                "Text": "Artistiek bezig zijn",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 43,
                "Text": "Onderhouden of repareren van materiaal",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 44,
                "Text": "Naaien/naaldwerk",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 45,
                "Text": "Lezen",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 46,
                "Text": "Gebruik maken van computer, laptop, tablet, smartphone",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 47,
                "Text": "Dansen, yoga etc.",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 48,
                "Text": "Vaardigheidsspellen spelen",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 49,
                "Text": "TV kijken",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 50,
                "Text": "Reizen (alle vorm van reizen)",
                "checked": false,
                "Quoting": null
            },
            {
                "ID": 51,
                "Text": "Verhalen vertellen",
                "checked": false,
                "Quoting": null
            }                   
                                    
                                ]
                                },
                                {
                                    "Subdomain": "Activiteiten van het dagelijks leven",
                                    "Question": [
                                {
                                    "ID": 52,
                                    "Text": "Rijden",
                                    "checked": false,
                                    "Quoting": null
                                },
                                {
                                    "ID": 53,
                                    "Text": "Gebruik maken van openbaar vervoer",
                                    "checked": false,
                                    "Quoting": null
                               },
                                    ]
                                }*/]

        $scope.NextStepBool = false;
        $scope.NextStep = function () {
            $scope.NextStepBool = true;
        }
        $scope.NextStep2 = function () {
            // $location.
        }

        /*
        eventuele oplossing radio buttons
        http://stackoverflow.com/questions/4553235/how-to-change-json-keyvalue


        function replaceByValue( field, oldvalue, newvalue ) {
    for( var k = 0; k < json.length; ++k ) {
        if( oldvalue == json[k][field] ) {
            json[k][field] = newvalue ;
        }
    }
    return json;*/

        $scope.radioValue = "radioValue";
        $scope.radioData = [{
            Rating: "ALTIJD MINDER dan ik wil",
            value: "1"
        }, {
            Rating: "SOMS MINDER dan ik wil",
            value: "2"
        }, {
            Rating: "ONGEVEER IDEAAL voor mij",
            value: "3"
        }, {
            Rating: "SOMS MEER dan ik wil",
            value: "02"
        }, {
            Rating: "ALTIJD MEER dan ik wil",
            value: "01"
        }
        ]

    });
})();