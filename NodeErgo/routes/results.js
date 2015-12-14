var express = require('express');
var router = express.Router();
var schema = require('../Mongoose/gebruiker');
var vragen = schema.survey;
var bodyparser = require('body-parser');
var auth = require('../Passport/auth.js')
var vraag = require('../Controllers/vragenController');

var isLoggedIn = auth.requiresApiLogin;


//Server vragen voor de Lijst met vragen/antwoorden
router.get('/testResults', isLoggedIn, function (req, res) {
    vraag.getVragen(req, res);
});

//Server vragen voor de score van een gebruiker
router.get('/testScore', isLoggedIn, function (req, res) {
    vraag.getScore(req, res);
});

//Vragen pushen naar de server
router.post('/testResults', isLoggedIn, function (req, res, next) {
    vraag.postSurvey(req, res, req.body);
});

//scores pushen naar de server


router.post('/testScore', isLoggedIn, function (req, res, next) {
    vraag.postScores(req, res, req.body);
});

module.exports = router;
