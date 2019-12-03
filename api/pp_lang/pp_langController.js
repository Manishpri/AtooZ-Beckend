'use strict';

var mongoose = require('mongoose');
var pp_lang = mongoose.model('pp_lang');

exports.findAll = function(req,res){
    pp_lang.find().then(pp_lang =>{
       return res.send(pp_lang);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || 'Some error occurred while fetching the pp_lang!'
        })
    });
};

module.exports.add = function(req,res){
    pp_lang.save(function(err,savedpp_lang){
        if(err){
            console.log('Error occurred in saving the new pp_lang!');
            res.send(err);
        } else{
            if(savedpp_lang){
                console.log('saved the new pp_lang Successfully!');
                res.json(savedpp_lang);
            }else{
                console.log('Could not save the pp_lang!');
                res.send({message: 'could not save the new pp_lang'});
            }
        }
    });
}

exports.findBylang = function(req,res){
    pp_lang.find({lang:req.params.lang},function(){
        if(!pp_lang) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.lang
            });            
        }
        return res.send(pp_lang);
    }).catch(err => {
        
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.lang
        });
    });
};

exports.update = function(req, res) {  
    pp_lang.updateOne({lang:req.params.lang}, function(err, pp_lang) {
      if (err) {
       
        return console.log(err);
    }
   
    //res.json(pp_lang);
    return res.send(pp_lang);
    });
  };

  exports.delete = function(req,res){
      pp_lang.remove({lang:req.params.lang},function(){
          if(err){
              return console.log(err);
          }
          return res.send(pp_lang);
      });
  };