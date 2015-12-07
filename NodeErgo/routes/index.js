var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var auth = require('../Passport/auth.js')

/* GET home page. */
router.get('/wrapper', function(req, res, next) {
    res.sendfile('views/wrapper.html')
});



router.post('/login', auth.authenticate);

router.post('/logout',function(req,res) {
    req.logout();
    res.end();
       
})



module.exports = router;
