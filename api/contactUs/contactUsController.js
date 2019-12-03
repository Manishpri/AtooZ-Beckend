const mongoose = require('mongoose');
var contact = mongoose.model('contactUs');

exports.findAll = function(req,res){
    contact.find().then(contact =>{
        return res.status(201).send(contact);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || 'Error occurred while fetching contacts'
        });
    });
};

module.exports.add = function(req,res){
    var contact = new contact({
        FullName : req.body.FullName,
        Email : req.body.Email,
        Phoneno : req.body.Phoneno,
        Subject : req.body.Subject,
        Message : req.body.Message
    });
    try{
        doc = contact.save()
        return res.status(201).send(doc);
    }
    catch(err){
        return res.status(500).send(err);
    }
};

exports.findById = function(req,res){
    contact.find({id : req.params.id},function(err,contact){
        if(err){
            return res.status(500).send(err);
        }
        return req.status(201).send(contact);
    });
};

exports.update = function(req,res){
    contact.updateOne({id : req.params.id},function(err,contact){
        if(err){
            return res.status(500).send(err);
        }
        return res.status(201).send(contact);
    });
};

exports.delete = function(req,res){
    contact.remove({id : req.params.id},function(err,contact){
        if(err){
            return res.status(500).send(err);
        }
        return res.status(201).send(contact);
    });
};
