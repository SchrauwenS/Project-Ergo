var express = require('express');
var router = express.Router();
var UserC = require('../Controllers/UserController');


/* GET Userlist page. */
/*
 * GET userlist.
 */
router.get('/userList', function (req, res) {
    
});




/* Adding users*/

router.get('/adduser', function (req, res){
    
    return UserC.getUser(req, res);

});

router.post('/adduser', function (req, res) {
    return UserC.create(req, res);
});


module.exports = router;