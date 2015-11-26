var mongoose = require('mongoose');

var schema = mongoose.Schema;

var gebruikersSchema = new schema(
 {
        Username: {
            type: String
            
        },
        Name: {
            type: String
           
        },
        
        Email: {
            type: String
           
        },
        
        Age: {
            type: Number
           
        },
        
        Telefoon: {
            type: Number
           
        },
        passwoord: {
            type: String
           
        }
    }
);

var Users = mongoose.model('Users', gebruikersSchema);
module.exports = Users;