var express = require('express');
var router = express.Router();
var schema = require('../Mongoose/gebruiker');
var vragen = schema.survey;
var bodyparser = require('body-parser');
var auth = require('../Passport/auth.js')
var vraag = require('../Controllers/vragenController');

var isLoggedIn = auth.requiresApiLogin;

router.get('/testResults', isLoggedIn, function (req, res) {
    vraag.getVragen(req, res);
});


router.post('/testResults', isLoggedIn, function (req, res, next) {
    vraag.postSurvey(req, res, req.body);
});


module.exports = router;
