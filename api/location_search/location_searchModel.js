var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema =new Schema({
  id : {
      type : Number
  },
  location : {
      type : String
  }

});

module.exports = mongoose.model('location_search',locationSchema);

