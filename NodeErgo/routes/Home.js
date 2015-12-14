var express = require('express');
var router = express.Router();
var auth = require('../Passport/auth.js')

var isLoggedIn = auth.requiresApiLogin;

/* GET home page. */
router.get('/',isLoggedIn, function (req, res, next) {
    
    console.log(req.user.name + ':' + req.user.Admin);
    if (req.user.Admin) {
        res.redirect('/admin')
    }
    else {
        res.render('Home');
    }
    
});




module.exports = router;
