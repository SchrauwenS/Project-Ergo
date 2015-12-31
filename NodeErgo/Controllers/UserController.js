var schema = require('../Mongoose/gebruiker')
var Users = schema.Users;
var encrypt = require('../Passport/encrypt');
var auth = require('../Passport/auth.js');



exports.create = function (req, res, next) {
    var userdata = req.body;
    
    if (
        userdata.APass == "Ergotherapie") {
        userdata.Admin = true;
    }
    
    userdata.salt = encrypt.createSalt();
    userdata.hashed_pwd = encrypt.hashPwd(userdata.salt, userdata.password);
    
    var email = userdata.email;
    var username = userdata.username;
    
    Users.findOne({ 'email': email }, function myFunction(err, user) {
        if (err) {
            console.log('Error in signup: ' + err);
            return res.send({ reason: err.toString() });
        }
        if (user && email) {
            console.log('email allready in use');
            return res.redirect('/');//hier moet de view gewoon terug terecht komen van register
        }
        else {
            Users.findOne({ 'username': username }, function (err, user) {
                if (err) {
                    console.log('Error in signup: ' + err);
                    return res.send({ reason: err.toString() });
                }
                if (user) {
                    console.log('user allready in use');
                    return res.redirect('/');//hier moet de view gewoon terug terecht komen van register
                }
                else {
                    Users.create(userdata, function myFunction(err, user) {
                        
                        req.logIn(user, function (err) {
                            if (err) {
                                console.log('something went wrong in the login');
                            }
                            else {
                                res.redirect('/Home');

                            }
                            
                        })
                        console.log('Signup');
                    
        
                    });
                }
               
            
            });
        }
        
        
    })

   
   
    

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

exports.updateUser = function (req, res, next) {
    var userUpdates = req.body;
    var userdata = {};
    
    
    console.log(userUpdates);
    if (!req.user._id && !req.user.Admin) {
        res.send(401);
        return res.end();
    }
    
    //kijkt of naam is ingevuld en de lengte groter is dan 0
    if (userUpdates.name && userUpdates.name.length > 0) {
        req.user.name = userUpdates.name;
        userdata.name = req.user.name;
    }
    //kijkt of passwoord is ingevuld en de lengte groter is dan 0
    if (userUpdates.password && userUpdates.password.length > 0) {
        req.user.salt = encrypt.createSalt();
        req.user.hashed_pwd = encrypt.hashPwd(req.user.salt, userUpdates.password);
    }
    //kijkt of telefoon is ingevuld en groter is dan 0
    if (userUpdates.telefoon && userUpdates.telefoon.length > 0) {
        req.user.telefoon = userUpdates.telefoon;
        userdata.telefoon = userUpdates.telefoon;
    }
    if (userUpdates.age && userUpdates.age.length > 0) {
        req.user.age = userUpdates.age;
        userdata.age = userUpdates.age;
    }
    //email aanpassen
    
    if (userUpdates.email && userUpdates.email.length > 0) {         
            userdata.email = userUpdates.email;      
        req.user.email = userUpdates.email;
    }
    req.user.save(function (err) {
        if (err) {
            res.status(400);
            return res.send({ reason: err.toString() });
        }
    });
    Users.update({ 'user': req.user._id }, { $set: userdata }, { upsert: false }, function (err, saved) {
        if (err) return console.log(err);
        return res.redirect('/');
        
        
    })
   
   
    
   

};
