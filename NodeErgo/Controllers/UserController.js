var schema = require('../Mongoose/gebruiker')
var Users = schema.Users;
var encrypt = require('../Passport/encrypt');




exports.create = function (req, res, next)
{
    var userdata = req.body;
    userdata.salt = encrypt.createSalt();
    userdata.hashed_pwd = encrypt.hashPwd(userdata.salt, userdata.password);

    Users.create(userdata, function myFunction(err, user) {
        if (err) {
            console.log(err);
            
            if (err.toString().indexOf('E11000') > -1) {
                err = new Error('Gebruikersnaam al in gebruik!');
            }
            
            res.status(400);
            return res.send({ reason: err.toString() });
        }
       /* else {
            req.logIn(user, function (err){
                if (err) { return next(err); }
                res.send(user);
            
            })
        }*/
        else {
            res.redirect(301, '/');
            console.log('saved to server');
        }
        
    });
   
    

};

exports.getUser = function (req, res) {

    res.render('register', { title: 'User - adding user' });

};

exports.getUserList = function (req, res) {
    Users.find({}, function (err, users) {
             
        if (err) {
            throw err;
        }
        else {
           
            console.log(users);
           
        }
        
        res.json(users);
    });

};