var crypto = require('crypto');


exports.createSalt = function createSalt() {
    return crypto.randomBytes(128).toString('base64');
};


exports.hashPwd = function hashpwd(salt, pwd) {
    var hmc = crypto.createHmac('sha1', salt);
    return hmc.update(pwd).digest('hex');
};