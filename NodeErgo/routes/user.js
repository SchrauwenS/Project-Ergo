var express = require('express');
var router = express.Router();
var auth = require('../Passport/auth.js');
var UserC = require('../Controllers/UserController');

var schema = require('../Mongoose/gebruiker');
var user = schema.Users;

var isLoggedIn = auth.requiresApiLogin;



router.post('/Update', isLoggedIn, function (req, res, next) {
    
    var email = req.body.email;
    console.log('huidige body:' + req.body.email);
    
    console.log('huidige aangemelde persoon: ' + req.user.email);
    
    user.findOne({ 'email': email }, function myFunction(err, user) {
        if (err) {
            console.log('Error in signup: ' + err);
            return res.send({ reason: err.toString() });
        }
        if (user) {
            if (req.user.email != email) {
                res.status(401);
                res.end();
                return res.redirect('/');
            }
            else {
                console.log('mail not changed');
            }
            
        }
        return UserC.updateUser(req, res, next);
       
    }
    )
});

router.get('/userinfo', isLoggedIn, function (req, res) {
    
    var userID = req.user.id;
    console.log(userID);
    
    user.findById(userID).lean().exec(function (err, result) {
        if (err) return console.error(err);
        
        var userdata = {
            userid: userID,
            username: result.username,
            name: result.name,
            email: result.email,
            telephone: result.telefoon,
            age: result.age,
            admin: result.Admin,
            geslacht: result.geslacht,
            burg_statuut: result.burg_statuut,
            diploma: result.diploma,
            huidskleur: result.huidskleur,
            kinderen: result.kinderen,
            werkstatus: result.werkstatus

        }
        
        res.status(200).json(userdata);
    })
})



module.exports = router;
