'use strict';

var mongoose = require('mongoose');
var Postedjob = mongoose.model('postedjob');

exports.findAll = function(req,res){
    Postedjob.find().then(postedjob =>{
        return res.status(200).send(postedjob);
    }).catch(err=>{
         res.status(500).send({
            message : err.message || 'Error occurred while fetching the skill'
        });
    });
};

exports.add = async function(req,res){ 
   
    var postedjob = new Postedjob({
        // id:req.body.id,
        CompanyId:req.body.CompanyId,
        JobTitle:req.body.JobTitle,
        Category:req.body.Category,
        NoofVacancies:req.body.NoofVacancies,
        Experience:req.body.Experience,
        JobMode:req.body.JobMode,
        ApplyBefore:req.body.ApplyBefore,
        MinSalary:req.body.MinSalary,
        MaxSalary:req.body.MaxSalary,
        postedBy:req.body.postedBy,
        CompanyName:req.body.CompanyName,
        Location:req.body.Location,
        City:req.body.City,
        Area:req.body.Area,
        Address:req.body.Address,
        skill:req.body.skill,
        Pincode:req.body.Pincode,
        Qualification:req.body.Qualification,
        JobDetail:req.body.JobDetail,
        status:req.body.status,
        posted_Date:req.body.posted_Date,
        

    });
   
    try{ 
        //  doc = await postedjob.save();
        return res.status(200).json(  postedjob.save());
    }
    catch(err){
        // return res.status(501).send(err)
        console.log(err)
    }

}

exports.findBypost_id = function(req,res){
    Postedjob.find({CompanyId:req.params.Company_id},function(err,postedjob){
        if(err) {
            return res.status(500).send({
                message: "Note not found with id " + req.params._id
            });            
        }
        return res.send(postedjob);
    });
};

exports.update = (req, res) => {
    let id = req.body._id
    let postjob = {
        JobTitle:req.body.JobTitle,
        Category:req.body.Category,
      // Password:Company.hashpassword(req.body.Password),
      NoofVacancies:req.body.NoofVacancies,
      Experience:req.body.Experience,
      JobMode:req.body.JobMode,
      ApplyBefore:req.body.ApplyBefore,
      MinSalary:req.body.MinSalary,
      MaxSalary:req.body.MaxSalary,
      postedBy:req.body.postedBy,
      CompanyName:req.body.CompanyName,
      Location:req.body.Location,
      Address:req.body.Address,
      City:req.body.City,
      Area:req.body.Area,
      Pincode:req.body.Pincode,
      Qualification:req.body.Qualification,
      skill:req.body.skill,
      JobDetail:req.body.JobDetail

     

      
    };
    Postedjob.update({_id:id},{$set: postjob},{new: true},).then(
        () => {
          return res.status(201).send({
            message: 'job updated successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(501).send({
            error: error
          });
        }
      );
    
  };
  
  

  exports.delete = function(req,res){
    Postedjob.remove({_id:req.params._id},function(err,postedjob){
          if(err){
              return res.status(500).send(err);
          }
          return res.status(201).send(postedjob);
      });
  };