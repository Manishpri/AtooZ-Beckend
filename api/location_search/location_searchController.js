var mongoose = require('mongoose');
var location = mongoose.model('location_search');

exports.findAll = function(req,res){
    location.find().then(location=>{
        return res.status(201).send(location);
    }).catch(err =>{
        res.status(500).send({
            message : err.message || 'Error occurred while fetching the location'
        });
    });
};

exports.findByLocation = function(req,res){
    location.find({location : req.params.location}).then(location=>{
        return res.status(201).send(location);
    }).catch(err =>{
        res.status(500).send({
            message : err.message || 'Error occurred while fetching the location'
        });
    });
};

