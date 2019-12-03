'use strict';
module.exports = function(app){
    var applied_job = require('../applied_job/applied_jobController');
    app.get('/api/applied_job',applied_job.findAll);
    app.post('/api/applied_job',applied_job.add);

    //  get by Name
     app.get('/api/applied_job/:shortlist/:Company_id',applied_job.findByStatus)
     app.get('/api/applied_job/:Company_id',applied_job.findById);
     app.put('/api/applied_job/:company_id',applied_job.update);
    // app.delete('/api/applied_job/:company_id',applied_job.delete);
};
