var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var UserC = require('../Controllers/UserController');
var auth = require('../passport/auth');




//router.get('/register', function (req, res) {
//    res.render('register')
//});


// Info van gebruiker bijwerken



//Get Users from the server


router.get('/users',auth.requiresApiLogin, function (req, res){
    
    if (req.user.Admin) {
        return UserC.getUserList(req, res);

    }
    else {
        res.sendStatus(403).redirect('/');
        
    }
    
   

})



module.exports = router;
