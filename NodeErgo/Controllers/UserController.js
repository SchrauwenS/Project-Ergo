var Users = require('../Mongoose/gebruiker.js');


exports.create = function (req, res)
{    
    var entry = new Users({   
        username: req.body.username,
        name: req.body.name,
        telefoon: req.body.telefoon,
        email: req.body.email,
        password: req.body.password,
        age:req.body.age
    });

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