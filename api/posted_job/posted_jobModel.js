'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var  autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/AtooZ");
 
autoIncrement.initialize(connection);


var postedjobSchema = new Schema({
  
  CompanyId: {
    type: Number,

  },

JobTitle : {
      type : String
  },
  Category : {
      type : String
  },
  NoofVacancies : {
      type : Number
  },
  Experience : {
    type : String
},
  JobMode : {
      type : String
  },
  
  ApplyBefore : {
      type : String
  },
  MinSalary : {
      type : Number
  },
  MaxSalary : {
      type : Number
  },
  postedBy : {
      type : String
  },
  CompanyName : {
      type : String
  },
  Location : {
      type : String
  },
  City : {
      type : String
  },
  Area : {
      type : String
  },
  Address : {
      type : String
  },
  skill : {
      type : String
  },
  Pincode : {
      type : Number
  },
  Qualification : {
      type : String
  },
  JobDetail : {
      type : String
  },
  status : {
      type : String
  },
  posted_Date : {
      type : Date
  }


});
postedjobSchema.plugin(autoIncrement.plugin, 'post_id');

module.exports = mongoose.model('postedjob', postedjobSchema);