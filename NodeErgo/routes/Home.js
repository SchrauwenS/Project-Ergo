var express = require('express');
var router = express.Router();
var auth = require('../Passport/auth.js')

var isLoggedIn = auth.requiresApiLogin;

var schema = require('../Mongoose/gebruiker');
var scores = schema.subScore;

/* GET home page. */
router.get('/', isLoggedIn, function (req, res, next) {
    
    console.log(req.user.name + ':' + req.user.Admin);
    if (req.user.Admin) {
        res.redirect('/admin')
    }
    else {
        var userID = req.user.id;
        
        scores.findOne({ user: userID }).lean().exec(function (err, saved) {
            if (err) return console.log(err);
            console.log(saved);
            if (!saved) {
                var newScore = {
                    user: userID,
                    subGezondheid: null,
                    subIdentiteit: null,
                    subRelaties: null,
                    subUitdaging: null,
                    totaalScore: null
                }
                
                scores.update({ 'user': userID }, { $set: newScore }, { upsert: true }, function (err, saved) {
                    if (err) return console.log(err);
                    res.status(201);
                })
            }
           
        })
        res.sendfile('views/wrapper.html'); // pagina waar de gebruiker terecht komt als hij aanmeld
    }
    
});




module.exports = router;
