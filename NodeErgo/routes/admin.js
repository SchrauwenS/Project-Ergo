var express = require('express');
var router = express.Router();
var schema = require('../Mongoose/gebruiker');
var vragen = schema.survey;
var 

var bodyparser = require('body-parser');
var auth = require('../Passport/auth.js')


var isAdmin = auth.isAdmin;


/* GET home page. */
router.get('/', isAdmin, function (req, res, next) {
    res.redirect('users/users');
});

router.get('/users:userID', isAdmin, function (req, res, next) {
    var userID = req.params.userID;
});





module.exports = router;
