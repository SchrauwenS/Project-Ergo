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
        Admin: Boolean,
             
    }
);

var scoreSchema = new schema({
    
   user: schema.ObjectId,
   subGezondheid: Number,
   subIdentiteit: Number,
   subRelaties: Number,
   subUitdaging: Number,
   subIntresse: Number,
   totaalScore: Number,
    


});

var vraagSchema = new schema({
    
    user: schema.ObjectId,
    text: String,
    score: String,
    vraagnummer: String

});

gebruikersSchema.methods = {
    authenticate: function (passwordToMatch){
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
}

var Users = mongoose.model('Users', gebruikersSchema);
var subScore = mongoose.model('subScore', scoreSchema);
var vraagSchema = mongoose.model('vragen', vraagSchema);

exports.Users = Users;
exports.subScore = subScore;
exports.vragen = vraagSchema;