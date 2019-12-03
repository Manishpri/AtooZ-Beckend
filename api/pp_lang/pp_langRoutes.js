'use strict';
var express = require('express');
var router = express.Router();

module.exports = function(app){
    var pp_lang = require('../pp_lang/pp_langController');
    app.get('/api/pp_lang',pp_lang.findAll);
     app.post('/api/pp_lang',pp_lang.add);

    // //  get by Name

    app.get('/api/pp_lang/:lang',pp_lang.findBylang);
    app.put('/api/pp_lang/:lang',pp_lang.update);
   app.delete('/api/pp_lang/:lang',pp_lang.delete);
}
