﻿var express = require('express');
var router = express.Router();
var schema = require('../Mongoose/gebruiker');
var vragen = schema.survey;
var bodyparser = require('body-parser');
var auth = require('../Passport/auth.js')
var vraag = require('../Controllers/vragenController');

var isAdmin = auth.isAdmin;


/* GET home page. */
router.get('/', isAdmin, function (req, res, next) {
    res.redirect('users/users');
});






module.exports = router;
