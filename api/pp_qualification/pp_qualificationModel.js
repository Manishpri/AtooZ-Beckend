var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var qualificationSchema = new Schema({

    ID : {
        type : String,
        unique : true,
        index : true,
        trim : true
    },
    val : {
        type : String
    },
    text : {
        type : String
    },
    display_order : {
        type : String
    }
});

module.exports = mongoose.model('pp_qualification',qualificationSchema)