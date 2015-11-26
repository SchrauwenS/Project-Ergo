var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TestPage' });
});


router.post('/login', function (req, res, next){
    
    var auth = passport.authenticate('local', function (err, username){
              
        if (err) {
            return next(err);
        }
        if (!username) {
            console.log('no success');
            res.send({ success: false });
        }
        req.logIn(username, function (err){
            if (err) {
                return next(err);
            }
            res.send({ success: true,username:username });
        })
        
    })
    auth(req, res, next);
});



module.exports = router;
