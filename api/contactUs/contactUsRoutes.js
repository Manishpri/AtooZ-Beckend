module.exports = function(app){
    var contact = require('../contactUs/contactUsController');

    app.get('/api/contactus',contact.findAll);
    app.post('/api/contactus',contact.add);
    app.get('/api/contactus/:id',contact.findById);
    app.put('/api/contactus/:id',contact.update);
    app.delete('/api/contactus/:id',contact.delete);
}