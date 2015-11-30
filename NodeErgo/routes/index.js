var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var auth = require('../Passport/auth.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TestPage' });
});


router.post('/login', auth.authenticate);

router.post('/logout',function(req,res) {
    req.logout();
    res.end();
       
})

router.get('*', function (req, res) {
    res.render('index', {
        bootstrappedUser:req.user


    });
});

module.exports = router;
