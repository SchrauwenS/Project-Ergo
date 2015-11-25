var Test = require('../Mongoose/gebruiker.js');


exports.create = function (req, res)
{
    
    console.log('accessed by: ' + req.body.Username + '');
    
    var entry = new Test({ Username: req.body.Username });
   /* var entry = new gebruikersSchema({
        Username: req.body.Username
        
        Name: req.body.Name,
        Telefoon: req.body.Telefoon,
        Email: req.body.Email,
        passwoord: req.body.passwoord,
        Age:req.body.Age
    });*/

    entry.save();
    res.redirect(301, '/');

};

exports.getUser = function (req, res) {

    res.render('newUser', { title: 'User - adding user' });

};