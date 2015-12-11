var schema = require('../Mongoose/gebruiker');
var vragen = schema.vragen;
var JsonVragen = require('../public/JSON/Questions');



exports.getVragen = function(req,res,next) {
   

    for (var Subs in JsonVragen) {
        
        //console.log('Subdomain:' + JsonVragen[Subs].Subdomain);
        
        
        for (var vraag in JsonVragen[Subs].Question) {
            
            // HIER KOMT CODE VOOR MONGOOSE //
            
            var vraag_id = JsonVragen[Subs].Question[vraag].ID;
            var vraag_user = req.user.id;
            var vraag_score = JsonVragen[Subs].Question[vraag].Quoting;
            var vraag_Text = JsonVragen[Subs].Question[vraag].Text;

            if (vraag_score == null) {
                vraag_score = 'N';
            }
            
            
            var newVraag = new vragen({
                user: vraag_user,
                text: vraag_Text,
                score: vraag_score,
                vraagnummer: JsonVragen[Subs].Question[vraag].ID
                
            });

            console.log('gebruiker: ' + newVraag.user + 'text: ' + newVraag.text + 'score: ' + newVraag.score + 'ID: ' + newVraag.vraagnummer);
            // MONGOOSE //
            

            
            //console.log('Question:' + JsonVragen[Subs].Question[vraag].Text);
        };
        
        
    }
    
};
