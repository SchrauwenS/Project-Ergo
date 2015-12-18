var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin.js');
var results = require('./routes/results');
var home = require('./routes/Home.js');
var app = express();
var cookieParser = require("cookie-parser");

//Port number

var portnumb = Number(process.env.PORT || 3000);

//Passport Code

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var cookiestore = require('connect-mongo')(session);
var configPassport = require('./Passport/passportconfig.js');
configPassport();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Mongoose
var mongoose = require('./Mongoose/dbconnection.js');
var schemas = require('./Mongoose/gebruiker.js');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'The Cake is A Lie',
    name: "Ergo",
    store: new cookiestore({
        mongooseConnection: mongoose.db,
        ttl: 7 * 24 * 60 * 60
    }),
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', routes);
app.use('/users', users);
app.use('/admin', admin);
app.use('/results', results);
app.use('/Home', home);
// Test Code


// end test code

var server = app.listen(portnumb, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('Example app listening at http://%s:%s', host, port);
});



module.exports = app;
