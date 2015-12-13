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
    
    for (var vraagindex in data.vragen) {
        for (var surveyindex in newSurvey.vragen) {
            if (newSurvey.vragen[surveyindex].vraagnummer == data.vragen[vraagindex].ID) {
                
                newSurvey.vragen[surveyindex].score = data.vragen[vraagindex].Quoting;
               
            }
        };
    };
    vragen.update({ 'user': req.user._id }, { $set: newSurvey }, { upsert: true }, function (err, saved) {
        if (err) return console.log(err);
        res.sendStatus(201);
    })
};

exports.postScores = function (req, res, data) {
    
    console.log(data);

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
        res.status(200).json(saved);
    })

};


exports.getScore = function myFunction(req,res,data) {
    scores.find({ 'user': req.user._id }, function (err, saved) {
        if (err) return console.log(err);
        res.status(200).json(saved);
    })
};
