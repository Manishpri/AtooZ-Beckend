module.exports = function(app) {
  var company = require('../companies/companiesController');

    // register List Routes
      app.get('/api/company', company.findAll);
     app.post('/api/company', company.add);
   
    //get  by id
     app.get('/api/company/:document', company.finduserBytoken);
    //  app.get('/api/company/auth', company.authToken);
    app.put('/api/company/:_id', company.update);
    app.delete('/api/company/:document', company.delete);
};