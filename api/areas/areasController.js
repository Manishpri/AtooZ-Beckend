'use strict';

var mongoose = require('mongoose');
var area = mongoose.model('area');


exports.findAll = function(req,res){
             
    area.find().then(area =>{ 
       return res.status(200).send(area);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || 'Some error occurred while fetching the area!'
        })
    });
};



exports.findByArea = function(req,res){
    // console.log("Request : ",typeof req.params.document)
    if ( req.params.document !== undefined && req.params.document !== "" ){
        if (req.params.document == 'State'){
            area.distinct('State').then(area =>{ 
                return res.status(200).send(area);
             }).catch(err=>{
                 res.status(500).send({
                     message: err.message || 'Some error occurred while fetching the area!'
                 })
             });
        } else {
            area.find({}).then(area =>{ 
                return res.status(200).send(area);
             }).catch(err=>{
                 res.status(500).send({
                     message: err.message || 'Some error occurred while fetching the area!'
                 })
             });
        }
    } else {
        console.log("Error");
    }
   
};

exports.update = function(req, res) {  
    area.updateOne({Area:req.params.Area}, function(err, area) {
      if (err) {
        return res.status(500).send(err);
    }
       return res.status(200).send(area);
    });
  };

  exports.delete = function(req,res){
      area.remove({Area:req.params.Area},function(err,area){
          if(err){
              return res.status(500)(err);
          }
          return res.status(200).send(area);
      });
  };