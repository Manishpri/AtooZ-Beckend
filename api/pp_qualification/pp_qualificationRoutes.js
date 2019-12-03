module.exports = function(app){

    var qualification = require('../pp_qualification/pp_qualificationController');

    app.get('/api/qualification',qualification.findAll);
    app.post('/api/qualification',qualification.add);
    app.get('/api/qualification/:qualification',qualification.findByqualification);
    app.put('/api/qualification/:qualification',qualification.update);
    app.delete('/api/qualification/:qualification',qualification.delete);
}