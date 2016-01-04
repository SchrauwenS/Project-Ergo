var mongoose = require('mongoose');
var link = process.env.Link;
console.log(link);

    mongoose.connect(link);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function (callback) {
    console.log('connection made.');
});

exports.db = db;