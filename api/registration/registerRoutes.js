module.exports = function(app) {
    var register = require('../registration/registerController');
  
      // register List Routes
       app.get('/api/register', register.findAll);
       app.post('/api/register', register.add);
      //get  by id
    //    app.get('/api/register/:id', register.findById);
    //   app.put('/api/register/:id', register.update);
    //   app.delete('/api/register/:id', register.delete);
  };