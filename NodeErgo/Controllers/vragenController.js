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
            
            
            
            if (vragen.findOne({ 'user': newVraag.user, 'ID': newvraag.vraagnummer }, function (err, gevondenVraag) {
            if (err) {
                                console.log('Probleem bij opslaan/updaten van antw: ' + err);
            }
            
           if (gevondenVraag) {
                if (gevondenVraag.score != newVraag.score) {
                    gevondenVraag.save(function (err) {
                        if (err) {
                                  console.log('Error bij toevoegen van vraag: ' + err)
                                 }
            
                                    });
                     console.log('Vraag aangepast: ' + newVraag.vraagnummer);
                }
                
                                

          
           
            }
            
            
            }));
            else {
                newVraag.save(function (err) {
                    if (err) {
                        console.log('Error bij toevoegen van vraag: ' + err)
                    }
            
                });
                console.log('Vraag opgeslagen: ' + newVraag.vraagnummer);
            }

           
            
        }   
        
        
        
    }
    
};
