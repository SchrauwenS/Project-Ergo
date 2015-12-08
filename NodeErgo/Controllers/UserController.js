var schema = require('../Mongoose/gebruiker')
var Users = schema.Users;
var encrypt = require('../Passport/encrypt');




exports.create = function (req, res, next)
{
    var userdata = req.body;
    userdata.salt = encrypt.createSalt();
    userdata.hashed_pwd = encrypt.hashPwd(userdata.salt, userdata.password);
    
    var email = userdata.email;
    
    Users.findOne({'email': email},function myFunction(err,user) {
        if (err) {
            console.log('Error in signup: ' + err);
            return res.send({ reason: err.toString() });
        }
        if (user && email) {
            console.log('email allready in use');
            return res.redirect('register');
        }
        else {
            Users.findOne({ 'username': username }, function (err, user) {
            if (err) {
                    console.log('Error in signup: ' + err);
                    return res.send({ reason: err.toString() });
            }
            if (user) {
                    console.log('user allready in use');
                    return res.redirect('register');
            }
              else {
                    Users.create(userdata, function myFunction(err, user) {
                        
                        res.redirect(301, '/');
                        console.log('Signup: ' + user.name);
                    
        
                    });
              }
               
            
            });
        }
        
        
    })   

   
   
    

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