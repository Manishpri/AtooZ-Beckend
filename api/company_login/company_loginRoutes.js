module.exports = function(app) {
    var company = require('../companies/companiesController');
    var appliedjob = require('../applied_job/applied_jobController')

    app.post('/api/companylogin',company.sign_in);
    // app.get('api/appliedcandidate',appliedjob.findByStatus)
  };