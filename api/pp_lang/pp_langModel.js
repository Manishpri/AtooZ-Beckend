'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pp_langSchema = new Schema({
    lang : {
        type : String
    }
});

module.exports = mongoose.model('pp_lang', pp_langSchema);