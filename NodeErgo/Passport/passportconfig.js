var passport = require('passport');
var mongoose = require('mongoose');
var LocalStategy = require('passport-local').Strategy;
var user = mongoose.model('Users');


module.exports = function () {
    
    
    passport.use(new LocalStategy(
        function (username, password, done) {
            user.findOne({ username: username }).exec(function (err, user) {
                if (user && user.authenticate(password)) {
                    return done(null, user);
                }
                else {
                    return done(null, false);
                }
           
            
            })
        }
    
    ));
    
    passport.serializeUser(function (user, done) {
        if (user) {
            console.log('test: ' + user);
            done(null, user._id);
        }
    });
    
    passport.deserializeUser(function (id, done) {
        user.findOne({ _id: id }).exec(function (err, user){
            if (user) {
                return done(null, user); 
            }
            else {
                return done(null, false);
            }
            
            
        })
    });
}