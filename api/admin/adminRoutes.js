module.exports = function(app){

    var admin = require('../admin/adminController');

    app.post('api/admin',admin.findAll);
    app.get('/api/admin',admin.findAll);
}