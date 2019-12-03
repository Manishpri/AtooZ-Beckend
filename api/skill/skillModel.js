var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillSchema = new Schema({
    id : {
        type : Number,
        trim : true,
        index : true,
        unique : true
    },
    skill : {
        type : String
    }
});

module.exports = mongoose.model('pp_skill',skillSchema);