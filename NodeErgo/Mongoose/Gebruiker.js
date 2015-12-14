var mongoose = require('mongoose');
var encrypt = require('../Passport/encrypt');
var schema = mongoose.Schema;

var gebruikersSchema = new schema(
    {
        username: {
            type: String,
            required: true,            

        },
        name: {
            type: String,
            required: true
        },
        
        email: {
            type: String,
            required: true,
            unique: true
        },
        
        age: {
            type: Number,
            default:null
           
        },
        
        telefoon: {  type: Number,  default: 0
           
           
        },         
        
        salt: {
            type: String,
            required: true
        },
        hashed_pwd: {
            type: String,
            required: true
        },
        Admin: {type: Boolean, default: false}
             
    }
);

var scoreSchema = new schema({
    
    user: schema.ObjectId,
    subGezondheid: Number,
    subIdentiteit: Number,
    subRelaties: Number,
    subUitdaging: Number,
    totaalScore: Number




});

var Survey = new schema({
    
    user: schema.ObjectId,
    vragen: [{
            text: String,
            score: String,
            vraagnummer: String
        }]

});

gebruikersSchema.methods = {
    authenticate: function (passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
}

var Users = mongoose.model('Users', gebruikersSchema);
var subScore = mongoose.model('subScore', scoreSchema);
var survey = mongoose.model('survey', Survey);

exports.Users = Users;
exports.subScore = subScore;
exports.survey = survey;