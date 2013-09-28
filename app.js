
/**
 * Module dependencies.
 */

var express = require('express'),
routes = require('./routes'),
api = require('./routes/api.js'),
pass = require('./routes/pass.js'),
path = require('path'),
mongoose = require('mongoose'),
passport = require('passport');
 
var app = express(),
server = require('http').createServer(app),
io = require('socket.io').listen(server);


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser("thissecretrocks"));
app.use(express.session());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
mongoose.connect('mongodb://localhost/Blue');



//Load main page
app.get('/', api.index);

//For registration
app.get('/register', api.newUser); //Load page
app.post('/register', api.saveUser); //Actually register the user within the database

//For Logins
app.get('/login', api.getlogin);
app.post('/login', api.postlogin);

//logout
app.get('/logout', api.logout);

//Shows all users
app.get('/user', pass.ensureAdmin, api.show);

//Allow user to modify account
app.get('/user/:id/', pass.ensureAuthenticated, api.profile);
app.get('/user/:id/account', pass.ensureAuthenticated, api.profile);

//New Myer-Briggs Score
app.get('/score', pass.ensureAuthenticated, api.newScorePage);
app.post('/score', pass.ensureAuthenticated, api.postScore);

app.get('/showUser', pass.ensureAuthenticated, api.showUser);
app.get('/contactInfo', pass.ensureAuthenticated, api.contactEntry);
app.post('/contactInfo', pass.ensureAuthenticated, api.pushContact);

app.get('/showContact', pass.ensureAuthenticated, api.grabContact);

server.listen(3000, function () {
  console.log("HTTP server is listening to port 3000");
});
