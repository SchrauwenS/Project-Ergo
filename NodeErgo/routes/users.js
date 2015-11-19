var express = require('express');
var router = express.Router();

/* GET Userlist page. */
/*
 * GET userlist.
 */
router.get('/', function (req, res) {
    var db = req.db;
    var collection = db.get('Users');
    collection.find({}, {}, function (e, docs) {
        res.json(docs);
    });
});

module.exports = router;
