var express = require('express');
var router = express.Router();
var auth = require('../Passport/auth.js')

//var isLoggedInRedirect = auth.requiresApiLogin;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

/* GET wrapper page. */
router.get('/wrapper', function (req, res, next) {
    res.sendfile('views/wrapper.html');
});



router.post('/login', auth.authenticate);

router.post('/logout',function(req,res) {
    req.logout();
    res.end();
       
})



module.exports = router;
