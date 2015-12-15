var schema = require('../Mongoose/gebruiker');
var vragen = schema.survey;
var JsonVragen = require('../public/JSON/Questions.json');
var JsonScore = require('../public/JSON/Answers.json');
var scores = schema.subScore;


// code voor om vragen te posten naat de server
exports.postSurvey = function (req, res, data) {
    
    var newSurvey = {
        user: req.user.id,
        vragen: []
    }
    for (var Subs in JsonVragen) {
        
        for (var vraag in JsonVragen[Subs].Question) {
            var newVraag = {
                text: JsonVragen[Subs].Question[vraag].Text,
                score: JsonVragen[Subs].Question[vraag].Quoting,
                vraagnummer: JsonVragen[Subs].Question[vraag].ID
            };
            
            newSurvey.vragen.push(newVraag);
            
        }
    }
    //indien vraag al bestaat, scores vergelijken en indien ze veranderd zijn deze aanpassen
    for (var subdomainindex in data) {
        for (var vraagindex in data[subdomainindex].Question) {
            //console.log(data[subdomainindex].Question[vraagindex]);
            for (var surveyindex in newSurvey.vragen) {                
                if (newSurvey.vragen[surveyindex].vraagnummer == data[subdomainindex].Question[vraagindex].ID) {
                    newSurvey.vragen[surveyindex].score = data[subdomainindex].Question[vraagindex].Quoting;
                }
            };
        };
    };
    vragen.update({ 'user': req.user._id }, { $set: newSurvey }, { upsert: true }, function (err, saved) {
        if (err) return console.log(err);
        res.sendStatus(201);
    })
};

exports.postScores = function (req, res, data) {
    
  
    
    var newScore = {
        user: req.user.id,
        subGezondheid: data.subtotalGezondheid,
        subIdentiteit: data.subtotalIdentiteit,
        subRelaties: data.subtotalRelaties,
        subUitdaging: data.subtotalUitdagingIntresse,
        totaalScore: data.totaal
    }
    
    scores.update({ 'user': req.user._id }, { $set: newScore }, { upsert: true }, function (err, saved) {
        if (err) return console.log(err);
        res.sendStatus(201);
    })
    
    
    
};



exports.getVragen = function (req, res, data) {
    
    vragen.find({ 'user': req.user._id }, function (err, saved) {
        if (err) return console.log(err);
        
    })

};


exports.getScore = function myFunction(req, res, data) {
    scores.findOne({ 'user': req.user._id }, function (err, saved) {
        if (err) return console.log(err);
        
        
        var result = {
            user: req.user.id,
            subGezondheid: saved.subGezondheid,
            subIdentiteit: saved.subIdentiteit,
            subRelaties: saved.subRelaties,
            subUitdaging: saved.subUitdaging,
            totaalScore: saved.totaalScore
        }
       
        res.status(200).json(result);
    })
};
