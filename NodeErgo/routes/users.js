var express = require('express');
var router = express.Router();
var user = require('../Mongoose/models/Gebruiker');


/* GET Userlist page. */
/*
 * GET userlist.
 */
router.get('/userList', function (req, res) {
    user.find({}, function (err, users) {
        
        
        console.log('test');
        if (err) {
            throw err;
        }
        else {
            console.log('test');
            console.log(users);
           
        }
        
        res.json(users);
    });
});




/*
 * POST to adduser.
 */
router.post('/adduser', function (req, res) {
    var db = req.db;
    var collection = db.get('Users');
    
    collection.insert(req.body, function (err, result) {
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

/*
 * DELETE to deleteuser.
 */
router.delete('/deleteuser/:id', function (req, res) {
    var db = req.db;
    var collection = db.get('Users');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function (err) {
        res.send((err === null) ? { msg: '' } : { msg: 'error: ' + err });
    });
});

router.get('/register', function (req, res, next) {
    res.render('register', { title: 'Register page' });
});

module.exports = router;