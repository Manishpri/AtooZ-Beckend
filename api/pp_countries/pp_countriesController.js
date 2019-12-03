'use strict';

var mongoose = require('mongoose');
var pp_countries = mongoose.model('pp_country');

exports.findAll = function(req,res){
    pp_countries.find().then(pp_countries =>{
       return res.send(pp_countries);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || 'Some error occurred while fetching the area!'
        })
    });
};

module.exports.add = function(req,res){
    pp_countries.save(function(err,savedarea){
        if(err){
            console.log('Error occurred in saving the new area!');
            res.send(err);
        } else{
            if(savedarea){
                console.log('saved the new area Successfully!');
                res.json(savedarea);
            }else{
                console.log('Could not save the area!');
                res.send({message: 'could not save the new area'});
            }
        }
    });
}

exports.findByName = function(req,res){
    pp_countries.find({Area:req.params.Name},function(){
        if(!pp_countries) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.Name
            });            
        }
        return res.send(pp_countries);
    }).catch(err => {
        
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.Name
        });
    });
};

exports.update = function(req, res) {  
    pp_countries.updateOne({Name:req.params.Name}, function(err, pp_countries) {
      if (err) {
       
        return console.log(err);
    }
   
    //res.json(area);
    return res.send(pp_countries);
    });
  };

  exports.delete = function(req,res){
    pp_countries.remove({Name:req.params.Name},function(){
          if(err){
              return console.log(err);
          }
          return res.send(pp_countries);
      });
  };