var LocalStrategy = require('passport-local').Strategy;
var User = require('../Mongoose/gebruiker.js');

module.exports = function (passport) {
    passport.use('login', new LocalStrategy({
        passReqToCallback: true
    },
        function (req, UserName, Passwoord, done) {
        User.findOne({ Username: UserName }).exec(function (err, user) {
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        
        
        })
    }
    ))

    passport.serializeUser(function (user, done) {
        if (user) {
            done(null, user._id);
        }
    });

    passport.deserializeUser(function (id, done) {
        user.findOne({ _id: id }).exec(function (err, done){
            if (user) {
                return done(null, user); 
            }
            else {
                return done(null, false);
            }
            
            
        })
        
    });
};