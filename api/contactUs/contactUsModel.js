'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactUsSchema = new Schema({
    id : {
        type : Number,
        trim : true,
        unique : true,
        index : true,
        uniqueCaseInsensitive : true,
        required : 'Please enter the Id'

    },
    Name : {
        type : String
    },
    Email : {
        type : String
    },
    Phone : {
        type : Number
    },
    Subject :{
        type : String
    },
    Message : {
        type : String
    }

});

module.exports = mongoose.model('contactUs',contactUsSchema);