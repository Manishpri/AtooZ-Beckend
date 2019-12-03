var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
  var candidate = require('../api/candidates/candidateModel');

passport.use('local',new LocalStrategy({
    usernameField : 'Email',
    passwordField : 'Password'
},
  function(username, password, done) {
    candidate.findOne({ Email: username }, function (err, candidate) {
      if (err) { return done(err); }
      if (!candidate) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!candidate.isValid(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, candidate);
    });
  }
));

passport.serializeUser(function(candidate, done) {
    done(null, candidate._id);
  });
  
  passport.deserializeUser(function(id, done) {
    candidate.findById(id, function(err, candidate) {
      done(err, candidate);
    });
  });