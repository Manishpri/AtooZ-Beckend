'use strict';

var mongoose = require('mongoose');
var Applied_job = mongoose.model('applied_job');

exports.findAll = function(req,res){
    Applied_job.find().then(applied_job =>{
       return res.send(applied_job);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || 'Some error occurred while fetching the applied_job!'
        })
    });
};

exports.add =async function(req,res){
    var applied_job = new Applied_job({
        
        Candidate_ID:req.body.Candidate_ID,
        CompanyName:req.body.CompanyName,
        JobTitle :req.body.JobTitle,
        Company_id:req.body.Company_ID,
        CandidateName:req.body.CandidateName,
        Post_ID:req.body.Post_ID,
        Status:req.body.Status,
        Applied_Date:req.body.Applied_Date,
       
    });
    try{
        // doc =await applied_job.save();
        return res.status(201).json(applied_job.save());
    }
    catch(err){
        console.log(err)
        return res.status(501).json(err)
    }
}



exports.findById = function(req,res){
   
   
    Applied_job.find({Company_id:req.params.Company_id},function(err,applied_job){
        if(err) {
            return res.status(500).send({
                message: "Note not found with id " + req.params._id
            });            
        }
        return res.send(applied_job);
    });
};
 exports.findByStatus = function(req,res){
     
     Company_id = parseInt(req.params.Company_id)
    
     console.log(Company_id)
//     console.log(req.params.Status)
//     Applied_job.find({Status:req.params.Status},function(err,applied_job){
//         if(err) {
//             return res.status(500).send({
//                 message: "Note not found with id " + req.params.Status
//             });            
//         }
//         return res.send(applied_job);
//     });

    // Applied_job.find({$and : [
    //     {"Company_id":"req.body.Company_id"},
    //     {"Status":"req.body.Status"}
    //  ]},function(err,applied_job){
    //     if(err) {
    //         return res.status(500).send({
    //             message: "Note not found with id " + req.body.Status
    //         });            
    //     }
    //     return res.send(applied_job);
    // });
 };

exports.update = function(req,res){
 
    Applied_job.findOneAndUpdate({
        Candidate_ID: req.body.Candidate_ID
    },
    { $set: { Status:(req.body.Status) }
   }, {upsert: true}, (err, newBook) => {
    if (err) {
     res.send('error updating ');
    } else {
     console.log(newBook);
     return res.send(newBook);
   }
  });
}


// exports.update = function(req, res) {  
//     applied_job.updateOne({company_id:req.params.company_id}, function(err, applied_job) {
//       if (err) {
       
//         return req.status(500).send(err);
//     }
   
//     //res.json(applied_job);
//     return res.status(200).send(applied_job);
//     });
//   };

//   exports.delete = function(req,res){
//       applied_job.remove({company_id:req.params.company_id},function(){
//           if(err){
//               return res.status(500).send(err);
//           }
//           return res.status(200).send(applied_job);
//       });
//   };