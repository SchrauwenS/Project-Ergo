var mongoose = require('mongoose');
var  encrypt = require('../Passport/encrypt');
var schema = mongoose.Schema;

var gebruikersSchema = new schema(
 {
        username:String ,
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
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
}

var Users = mongoose.model('Users', gebruikersSchema);

exports.Users = Users;