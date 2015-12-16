var passport = require('passport');

exports.authenticate = function (req, res, next) {
    
    var auth = passport.authenticate('local', function (err, username) {
        
        if (err) {
            return next(err);
        }
        if (!username) {
            console.log('no success');
            res.redirect('/');
        }
        else {
            req.logIn(username, function (err) {
                res.redirect('/Home');
            })
         
        }
    })
    auth(req, res, next);
};

exports.requiresApiLogin = function (req, res, next) {
    if (!req.isAuthenticated()) {
        res.status(403).send('U need to be logged in');
        res.redirect('/');
    } else {
       
        next();
    }
};

exports.isAdmin = function (req, res, next) {
    if (!req.isAuthenticated()) res.redirect('/');
    if (!req.user.Admin) res.redirect('/');
    return next();
}