﻿var express = require('express');
var router = express.Router();
var auth = require('../Passport/auth.js');
var UserC = require('../Controllers/UserController');

var schema = require('../Mongoose/gebruiker');
var user = schema.Users;

var isLoggedIn = auth.requiresApiLogin;


router.get('/userinfo', isLoggedIn, function (req, res) {
    
    var userID = req.user.id;
    console.log(userID);

    user.findById(userID).lean().exec(function (err, result) {
        if (err) return console.error(err);
        
        var userdata = {
            userid: userID,
            username: result.username,
            name:result.name,
            email: result.email,
            telephone: result.telefoon,
            age: result.telefoon,
            admin: result.Admin
        }
        
         res.status(200).json(userdata);
    })
})

module.exports = router;
