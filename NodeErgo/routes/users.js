var express = require('express');
var router = express.Router();

/* GET Userlist page. */
router.get('/', function (req, res) {
    var db = req.db;
    var collection = db.get('Users');
    collection.find({}, {}, function (e, docs) {
        res.render('users', {
            "users" : docs
        });
    });
});

module.exports = router;
