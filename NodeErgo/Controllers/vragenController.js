var schema = require('../Mongoose/gebruiker');
var vragen = schema.survey;
var JsonVragen = require('../public/JSON/Questions');



exports.postSurvey = function (req, res, data) {
    
    var newSurvey = {
        user: req.user.id,
        vragen: []
    }
    for (var Subs in JsonVragen) {
        
        //console.log('Subdomain:' + JsonVragen[Subs].Subdomain);
        
        
        for (var vraag in JsonVragen[Subs].Question) {
            var newVraag = {
                text: JsonVragen[Subs].Question[vraag].Text,
                score: JsonVragen[Subs].Question[vraag].Quoting,
                vraagnummer: JsonVragen[Subs].Question[vraag].ID
            };
            
            newSurvey.vragen.push(newVraag);
            
        }
    }
    for (var vraagindex in data.vragen) {
        for (var surveyindex in newSurvey.vragen) {
            if (newSurvey.vragen[surveyindex].vraagnummer == data.vragen[vraagindex].ID) {
                newSurvey.vragen[surveyindex].text = data.vragen[vraagindex].Text;
                newSurvey.vragen[surveyindex].score = data.vragen[vraagindex].Quoting;
            }
        };
    };
    vragen.update({ 'user': req.user._id }, { $set: newSurvey }, { upsert: true }, function (err, saved) {
        if (err) return console.log(err);
        res.sendStatus(201);
    })
};
