// const mongoose = require('mongoose')
// const Candidate = mongoose.model('candidate');
// exports.findById = function(req,res){
    
//     Candidate.find({_id:req.params._id},function(err,candidate){
//         if(err) {
//             return res.status(500).send({
//                 message: "Note not found with id " + req.params.id
//             });            
//         }
//         return res.send(candidate);
//     });
//   };