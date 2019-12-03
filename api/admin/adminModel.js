var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    email : {
        type : String
    },
    password : {
        type : String
    }

});

module.exports = mongoose.model('admin',adminSchema);