const mongoose = require('mongoose')
var register = mongoose.model('register');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

exports.findAll = function(req,res){
    register.find().then(register =>{
      return  res.send(register);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occurred while posting registration"
        });
    });
};

exports.add = function(req,res){
    
    var register = new register({
        id:req.body.id,
        FullName:req.body.FullName,
        Email:req.body.Email,
        Password:register.hashPassword(req.body.Password),
        Gender:req.body.Gender,
        DOB:req.body.DOB,
        Qualification:req.body.Qualification,
        Experience:req.body.Experience,
        MobileNo:req.body.Mobileno,
        AlternativeNo:req.body.Alternativeno,
        Aadhar:req.body.Aadhar,
        AboutYourself:req.body.Aboutyourself,
        Language:req.body.Language,
        Address:req.body.Address,
        Pincode:req.body.Pincode,
        Skill:req.body.Skill
    });
    try{
        // doc = await register.save();
        // return res.status(201).json(doc);
    }
    catch(err){
        return res.status(501).json(err)
    }

};

exports.findId = function(req,res){
    register.find({id:req.params.registerId}).then(register=>{
        return res.send(register);
    }).catch(err =>{
        res.status(500).send({
            message :  "some error occurred while retrieving register" + req.params.registerId
        });
    });
};

exports.update = function(req,res){

}

exports.delete = function(req,res){

}