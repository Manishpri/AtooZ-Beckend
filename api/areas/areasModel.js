'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var areasSchema = new Schema({
    Area : {
        type : String
    },
    Division :{
        type : String
    },
    Region : {
        type : String
    },
    Circle : {
        type : String

    },
    Taluk : {
        type : String
    },
    district : {
        type : String
    },
    State : {
        type : String
    },
    Pincode : {
        type : Number
    }
});

module.exports = mongoose.model('area', areasSchema);