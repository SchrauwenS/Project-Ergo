var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var auth = require('../Passport/auth.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TestPage' });
});


router.post('/login', auth.authenticate);



module.exports = router;
