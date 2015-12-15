﻿var express = require('express');
var router = express.Router();
var schema = require('../Mongoose/gebruiker');


var vragen = schema.survey;
var user = schema.Users;
var scores = schema.subScore;


var bodyparser = require('body-parser');
var auth = require('../Passport/auth.js')


var isAdmin = auth.isAdmin;


/* GET home page. */
router.get('/', isAdmin, function (req, res, next) {
    res.redirect('users/users');
});


/* Get specific user*/
router.get('/users/:id', isAdmin, function (req, res, next) {
    var userID = req.params.id;
    console.log(userID);
    user.findById(userID).lean().exec(function (err, result) {
        if (err) return console.error(err);
        
        res.status(200).json(result);
    })

});
/* get specific Survey from a user */
router.get('/users/:id/survey', isAdmin, function (req, res, next) {
    var userID = req.params.id;
    console.log(userID);
    vragen.find({ user: userID }).lean().exec(function (err, result) {
        if (err) return console.error(err);
        
        res.status(200).json(result);
    })

});

/* get specific Survey from a user */
router.get('/users/:id/score', isAdmin, function (req, res, next) {
    var userID = req.params.id;
    console.log(userID);
    scores.find({ user: userID }).lean().exec(function (err, result) {
        if (err) return console.error(err);
        
        res.status(200).json(result);
    })

});


module.exports = router;
