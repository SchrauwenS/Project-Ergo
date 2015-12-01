var passport = require('passport');


exports.authenticate = function (req, res, next) {
    
    var auth = passport.authenticate('local', function (err, username) {
        
        if (err) {
            return next(err);
        }
        if (!username) {
            console.log('no success');
            res.send({ success: false });
        }
        req.logIn(username, function (err) {
            if (err) {
                return next(err);
            }
            res.send({ success: true, username: username });
        })
        
    })
    auth(req, res, next);
};

exports.requiresApiLogin = function (req, res, next) {
    if (!req.isAuthenticated) {
        console.log('You need to be logged in')
        res.status(403);
        res.end;
    } else {
        next();
    }
};