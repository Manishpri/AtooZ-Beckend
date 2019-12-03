

 module.exports = function(app) {
    var candidate = require('../candidates/candidateController');

    app.post('/api/candidatelogin',candidate.sign_in);
     app.get('/api/candidatelogin/:_id', candidate.findById);
  };