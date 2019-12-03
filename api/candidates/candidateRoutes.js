module.exports = function(app) {

    var candidate = require('../candidates/candidateController');
  
    app.post('/api/forgot',candidate.forgot);
     app.put('/api/reset',candidate.reset);
    
      // register List Routes
       app.get('/api/candidate', candidate.findAll);
       app.post('/api/candidate', candidate.add);
     
      //get  by id
      app.get('/api/candidate/:document', candidate.getuserBytoken);
    
      //  app.get('/api/candidate/auth', candidate.authToken);
      app.put('/api/candidate/:_id', candidate.update);
      app.delete('/api/candidate/:document', candidate.delete);
     
  };