var express = require('express');
var router = express.Router();
var auth = require('../Passport/auth');
var bodyparser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TestPage' });
});

router.post('/login',function(req,res,next) {
    
    console.log("Loggin In")
    return auth.authenticate(req, res, next);
    console.log('success');
});





module.exports = router;
