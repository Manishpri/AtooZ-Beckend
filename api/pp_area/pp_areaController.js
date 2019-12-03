'use strict';

var mongoose = require('mongoose');
var PP_area = mongoose.model('pp_area');

exports.findAll = function(req,res){
    PP_area.find().then(PP_area =>{
       return res.send(PP_area);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || 'Some error occurred while fetching the area!'
        })
    });
};



exports.findByArea = function(req,res){
    PP_area.find({Area:req.params.Area},function(){
        if(!PP_area) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.Area
            });            
        }
        return res.send(PP_area);
    }).catch(err => {
        
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.Area
        });
    });
};

