'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pp_countriesSchema = new Schema({
    ID : {
        type : String
    },
    country_name :{
        type : String
    },
    country_citizen : {
        type : String
    }
    });

module.exports = mongoose.model('pp_country', pp_countriesSchema);