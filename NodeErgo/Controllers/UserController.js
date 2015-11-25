var Users = require('../Mongoose/gebruiker.js');


exports.create = function (req, res)
{
    
    console.log('accessed by: ' + req.body.Username + '');
    
    var entry = new Users({   
        Username: req.body.Username,
        Name: req.body.Name,
        Telefoon: req.body.Telefoon,
        Email: req.body.Email,
        passwoord: req.body.passwoord,
        Age:req.body.Age
    });

    entry.save();
    console.log('saved to server');
    res.redirect(301, '/');

};

exports.getUser = function (req, res) {

    res.render('newUser', { title: 'User - adding user' });

};