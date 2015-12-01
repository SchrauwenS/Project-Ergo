var schema = require('../Mongoose/gebruiker')
var Users = schema.Users;





exports.create = function (req, res, next)
{
    var userdata = req.body;
    userdata.salt = 
    userdata.hashed_pwd =

    entry.save();
    console.log('saved to server');
    res.redirect(301, '/');

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