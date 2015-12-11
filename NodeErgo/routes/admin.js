var express = require('express');
var router = express.Router();
var schema = require('../Mongoose/gebruiker');
var vragen = schema.survey;
var bodyparser = require('body-parser');
var auth = require('../Passport/auth.js')
var vraag = require('../Controllers/vragenController');

var isLoggedIn = auth.requiresApiLogin;
var isAdmin = auth.isAdmin;


/* GET home page. */
router.get('/', isAdmin, function (req, res, next) {
    res.redirect('users/users');
});
router.get('/Json', isAdmin, function (req, res, next) {
    vragen.find({ 'user': req.user._id }, function (err, saved) {
        if (err) return console.log(err);
        res.status(200).json(saved);
    })
});

router.post('/Json', isAdmin, function (req, res, next) {
    vraag.postSurvey(req, res, req.body);
});



module.exports = router;
