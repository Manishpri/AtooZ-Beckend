'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var posted_jobSchema = new Schema({
  id: {
    type: Number,
    trim : true,
    index : true,
    unique : true
  },
  Area: {
    type: String
  },
  Circle: {
    type: String
  },
  District : {
      type : String
  },
  Division : {
      type : String
  },
  Pincode : {
      type : String
  },
  Region : {
      type : String
  },
  Pincode : {
      type : String
  },
  State : {
      type : String
  },
  Taluk : {
      type : String
  },
  area_pin : {
      type : String
  }
});

module.exports = mongoose.model('pp_area', posted_jobSchema);