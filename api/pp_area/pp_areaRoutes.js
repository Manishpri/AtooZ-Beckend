'use strict';
var express = require('express');
var router = express.Router();

module.exports = function(app){
    var pp_area = require('../pp_area/pp_areaController');
    app.get('/api/pp_area',pp_area.findAll);
    // app.post('/api/pp_area',pp_area.add);

    //  get by Name

    app.get('/api/pp_area/:Area',pp_area.findByArea);
    // app.put('/api/pp_area/:Name',pp_area.update);
    // app.delete('/api/pp_area/:Name',pp_area.delete);
}
