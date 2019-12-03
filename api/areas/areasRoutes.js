'use strict';
let express = require('express');
let router = express.Router();

module.exports = function(app){
    let area = require('../areas/areasController');
    app.get('/api/area',area.findAll);
    // app.post('/api/area',area.add);

    //  get by Name

    app.get('/api/area/:document',area.findByArea);
    app.put('/api/area/:Area',area.update);
    app.delete('/api/area/:Area',area.delete);
}
