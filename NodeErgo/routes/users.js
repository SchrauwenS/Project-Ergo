var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var UserC = require('../Controllers/UserController');
var auth = require('../passport/auth');

/* Adding users*/

router.get('/adduser', function (req, res){
    
    return UserC.getUser(req, res);

});

router.post('/adduser', function (req, res) {
    return UserC.create(req, res);
});

router.get('/register', function (req, res) {
    res.render('register')
});


// Info van gebruiker bijwerken

router.put('/Update', function (req, res, next) {
   return UserC.updateUser(req, res, next);

});

//Get Users from the server


router.get('/users',auth.requiresApiLogin, function (req, res){
    
    if (req.user.Admin) {
        return UserC.getUserList(req, res);

    }
    else {
        
    }
    
   

})



module.exports = router;
