var mongoose = require('mongoose');
var crypto = require('crypto');
var schema = mongoose.Schema;

var gebruikersSchema = new schema(
 {
        username: {
            type: String
            
        },
        name: {
            type: String
           
        },
        
        email: {
            type: String
           
        },
        
        age: {
            type: Number
           
        },
        
        telefoon: {
            type: Number
           
        },
        password: {
            type: String
           
        },
        salt: String,
        hashed_pwd: String,
        Admin: Boolean
    }
);

gebruikersSchema.methods = {
    authenticate: function (passwordToMatch){
        return hashpwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
}


function createSalt() {
    return crypto.randomBytes(128).toString('base64');
};
function hashpwd(salt, pwd) {
    var hmc = crypto.createHmac('sha1', salt);
    return hmc.update(pwd).digest('hex');
};


var Users = mongoose.model('Users', gebruikersSchema);

exports.Users = Users;