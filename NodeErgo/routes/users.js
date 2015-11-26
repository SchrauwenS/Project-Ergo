var express = require('express');
var router = express.Router();
var UserC = require('../Controllers/UserController');

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

//Get Users from the server

router.get('/userList', function (req, res) {
    return UserC.getUserList(req, res);

});


module.exports = router;
