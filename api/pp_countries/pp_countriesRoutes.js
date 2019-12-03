'use strict';
var express = require('express');
var router = express.Router();

module.exports = function(app){
    var pp_countries = require('../pp_countries/pp_countriesController');
    app.get('/api/pp_countries',pp_countries.findAll);
    app.post('/api/pp_countries',pp_countries.add);

    //  get by Name

    app.get('/api/pp_countries/:Name',pp_countries.findByName);
    app.put('/api/pp_countries/:Name',pp_countries.update);
    app.delete('/api/pp_countries/:Name',pp_countries.delete);
}
