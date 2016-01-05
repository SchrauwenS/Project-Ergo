var express = require('express');
var router = express.Router();
var auth = require('../Passport/auth.js');
var UserC = require('../Controllers/UserController');
var isLoggedIn = auth.requiresApiLogin;

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/home')
    }
    else {
        res.sendfile('views/Loginwrapper.html');
    }
    
});


router.post('/login', auth.authenticate);

router.get('/logout',function(req,res) {
    req.session.destroy();
    req.logout();
    res.redirect('/');
})

router.post('/adduser',function (req, res) {
    UserC.create(req, res);
 
});



module.exports = router;
