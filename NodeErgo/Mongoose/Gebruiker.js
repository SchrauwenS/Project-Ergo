var mongoose = require('mongoose');
var  encrypt = require('../Passport/encrypt');
var schema = mongoose.Schema;

var gebruikersSchema = new schema(
 {
        username: {
            type: String,
            required: '{PATH} is required',
            

        },
        name: {
            type: String,
            required: '{PATH} is required'
        },
        
        email: {
            type: String,
            required: '{PATH} is required',
            unique: true
        },
        
        age: {
            type: Number
           
        },
        
        telefoon: {
            type: Number
           
        },         
        
        salt: {
            type: String,
            required: '{PATH} is required'
        },
        hashed_pwd: {
            type: String,
            required: '{PATH} is required'
        },
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