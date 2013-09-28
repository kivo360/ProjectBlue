var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy
  , User = require('./../models/users/user.js');

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});


//The login strategy
passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },function(username, password, done) {
    console.log(username);
    console.log(password);
  User.findOne({ email: username }, function(err, user) {
    console.log(user);
    if (err) { return done(err); }
    if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
    user.comparePassword(password, function(err, isMatch) {
      if (err) return done(err);
      if(isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Invalid password' });
      }
    });
  });
}));

// Simple route middleware to ensure user is authenticated.  Otherwise send to login page.
exports.ensureAuthenticated = function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}



// Check for admin middleware, this is unrelated to passport.js
// You can delete this if you use different method to check for admins or don't need admins
exports.ensureAdmin = function ensureAdmin(req, res, next) {
    return function(req, res, next) {
	console.log(req.user);
        if(req.user && req.user.admin === true)
            next();
        else
            res.redirect('/');
    };
}

exports.ensureUser = function ensureUser (req, res, next) {
  return function (req, res, next) {
    if(req.params.id === req.user._id){
      next();
    }
    else{
      redirect('/user/' + req.params.id);
    }
  };
}
