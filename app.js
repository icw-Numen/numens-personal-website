var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    flash = require('connect-flash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    //mongoose = require('mongoose'),
    middleware = require('./middleware'),
    fs = require('fs'),
    https = require('https');

// requiring routes
var indexRoutes = require("./routes/index");

// port and IP
var port = process.env.PORT,
    ip = process.env.IP;
    
//HTTPS
var privateKey = fs.readFileSync(__dirname + '/ssl/domain-key.txt');
var certificate = fs.readFileSync(__dirname + '/ssl/domain-crt.txt');
    
// connect to db
//var dbUrl = process.env.DATABASEURL;
//mongoose.connect(dbUrl, { useNewUrlParser: true });

// changing some Express settings
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(flash());

// Passport settings
app.use(require("express-session")({
    secret: "the sun will always rise again",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
//passport.use(new LocalStrategy(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());

// setting some variables to be shared across all routes
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});

// setting up routes
app.use('/', indexRoutes);

// app.listen(port, ip, function() {
//   console.log('numen\'s personal website\'s server online');
// });

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(port, function() {
   console.log('numen\'s personal website\'s https server online');
});