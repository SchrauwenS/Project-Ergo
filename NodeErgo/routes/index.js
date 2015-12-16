var express = require('express');
var router = express.Router();
var auth = require('../Passport/auth.js')

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



module.exports = router;
