var db = require('./dbconnection.js');

var schema = db.Schema;

var gebruikersSchema = new schema(
 {
        voornaam: {
            type: String,
            required: true
        },
        naam: {
            type: String,
            required: true
        },
        
        email: {
            type: String,
            required: true
        },
        
        leeftijd: {
            type: Number,
            required: true
        },
        
        telefoon: {
            type: Number,
            required: true
        },
        passwoord: {
            type: String,
            required: true
        }
    }
);

var User = mongoose.model("Users", gebruikersSchema);
module.exports = User;