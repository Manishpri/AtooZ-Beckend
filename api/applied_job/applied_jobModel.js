'use strict';
 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;
 var  autoIncrement = require('mongoose-auto-increment');
 var connection = mongoose.createConnection("mongodb://localhost/AtooZ");
  
 autoIncrement.initialize(connection);
 var applied_job_Schema = new Schema({
    Candidate_ID : {
         type : Number
     },
     Company_id : {
         type : Number
     },
     Post_ID: {
         type : Number
     },
     Status : {
         type : String
     },
     CompanyName:{
         type:String
     },
     CandidateName:{
         type:String
     },
     JobTitle:{
         type:String
     },
     Applied_Date : {
         type : Date
     }
     
 });
 applied_job_Schema.plugin(autoIncrement.plugin, 'A_id');

 module.exports = mongoose.model('applied_job',applied_job_Schema);

