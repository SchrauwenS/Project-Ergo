var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var auth = require('../Passport/auth.js')

var isLoggedIn = auth.requiresApiLogin;
var isAdmin = auth.isAdmin;


/* GET home page. */
router.get('/',isAdmin, function (req, res, next) {
    res.redirect('users/users');
});




module.exports = router;
