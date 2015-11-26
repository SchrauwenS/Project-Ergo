var LocalStrategy = require('passport-local').Strategy;
var User = require('../Mongoose/gebruiker.js');

module.exports = function (passport) {
    passport.use('login', new LocalStrategy({
        passReqToCallback: true
    },
        function (req, username, password, done) {
        User.findOne({ username: UserName }).exec(function (err, user) {
            if (user) {
                console.log('Found user: ' + user);
                return done(null, user);
            }
            else {
                console.log('not found');
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