var mongoose = require('mongoose');

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
           
        }
    }
);

var Users = mongoose.model('Users', gebruikersSchema);
module.exports = Users;