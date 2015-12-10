var schema = require('../Mongoose/gebruiker')
var vragen = schema.vraagSchema;

var JsonVragen = require('../public/JSON/Questions');



exports.getVragen = function(req,res,next) {
    
    for (var Subs in JsonVragen) {
        
        console.log('Subdomain:' + JsonVragen[Subs].Subdomain);
        
       
        for (var vraag in JsonVragen[Subs].Question) {
            
            // HIER KOMT CODE VOOR MONGOOSE //
            
            // MONGOOSE //
            
            console.log('Question:' + JsonVragen[Subs].Question[vraag].Text);
        };
        
        
    }
};
