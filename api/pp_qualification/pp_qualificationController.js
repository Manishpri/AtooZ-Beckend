var mongoose = require('mongoose');
var qualification = mongoose.model('pp_qualification');

exports.findAll = function(req,res){
    qualification.find().then(qualification=>{
        return res.status(200).send(qualification);
    }).catch(err=>{
        return res.status(500).send({
            message : res.message || 'Error occurred while fetching the Qualification!'
        });
    });
};

module.exports.add = function(req,res){
    var qualification = new qualification({
        val : req.body.val
    });
     qualification.save();
        res.status(200).send(qualification);
};

exports.findByqualification = function(){
    qualification.find({qualification:req.params.qualification},function(err,qualification){
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send(qualification);
    });
};

exports.update = function(req,res){
    qualification.updateOne({qualification : req.params.qualification},function(err,qualification){
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send(qualification);
    });
};

exports.delete = function(req,res){
    qualification.remove({qualification : req.params.qualification},function(err,qualification){
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send(qualification);
        });
};