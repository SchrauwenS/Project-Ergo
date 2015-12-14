var express = require('express');
var router = express.Router();
var auth = require('../Passport/auth.js')

//var isLoggedInRedirect = auth.requiresApiLogin;

/* GET home page. */
router.get('/', function (req, res, next) {
    if (req.user.Admin) {
        res.redirect('/admin')
    }
    else {
        res.render('Home');
    }
    
});




module.exports = router;
