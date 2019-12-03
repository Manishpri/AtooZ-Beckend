const mongoose = require('mongoose')
const Candidate = mongoose.model('candidate');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const passport = require('passport');
const nodemailer = require('nodemailer');


exports.findAll = function(req,res){

    Candidate.find().then(candidate =>{
      return  res.status(200).send(candidate);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occurred while posting registration"
        });
    });
};
exports.findById = function(req,res){
    
    Candidate.find({_id:req.params._id},function(err,candidate){
        if(err) {
            return res.status(500).send({
                message: "Note not found with id " + req.params.id
            });            
        }
        return res.send(candidate);
    });
  };
exports.add = async function(req,res){
  
 
    var candidate = new Candidate({
       
        FullName:req.body.FullName,
        Email:req.body.Email,
        Password:Candidate.hashpassword(req.body.Password),
        Gender:req.body.Gender,
        DOB:req.body.DOB,
        Qualification:req.body.Qualification,
        Experience:req.body.Experience,
        MobileNo:req.body.MobileNo,
        AlternativeNo:req.body.Alternativeno,
        Aadhar:req.body.Aadhar,
        AboutYourself:req.body.AboutYourself,
        Language:req.body.Language,
        Address:req.body.Address,
        Pincode:req.body.Pincode,
        skill_name:req.body.skill_name
    });

    try { 
          doc = await candidate.save(); 
    //       var smtpTransport = nodemailer.createTransport({
    //         service: "Gmail",
    //         auth: {
    //             user: "manishkhasraj14@gmail.com",
    //             pass: 'Mack@111'
    //             }
    //     });
    //     mailOptions={
    //         from:'"manish"<manish@octaloptimum.com>',
    //         to :candidate.Email,
    //         subject : "Atoozjobs",
    //         html : "<h4>Registration successfully!!!!</h4><h2>"+candidate.Email+"</h2>"
    //     }
    //     smtpTransport.sendMail(mailOptions, function(error, response){
    //         if(error){

    //             msg='Server is not responding, Please try again latter'
    //             errors=[{msg}];
    //               }
                

    // })

      return res.status(200).json(doc);
      }
      catch(err){
          return res.status(501).json(err);
      }
   

};

exports.forgot = function(req,res){
  Candidate.findOne({
    Email: req.body.Email
  }, function(err, Candidate) {
    if (err) throw err;
    if (!Candidate) {
      res.status(401).json({ message: 'Authentication failed. User not found.' });
    } else if (Candidate) {
      if (!Candidate.isValid(req.body.Password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        var smtpTransport = nodemailer.createTransport({
          service: "Gmail",
          auth: {
              user: "manishkhasraj14@gmail.com",
              pass: 'maniii@#'
               }
      });
  
  
      mailOptions={
          from:'manish',
          to :Candidate.Email,
          subject : "Atoozjobs",
          html : '<p><a href="www.ggo.com"></a></p>'
      }
  
      smtpTransport.sendMail(mailOptions, function(error, response){
          if(error){
            return res.json({'status':'fail','message': error});
              msg='Server is not responding, Please try again latter'
              errors=[{msg}];
              } 
        return res.json({'message':'success'});

  })
  
        // return res.json({token: jwt.sign({Email: Candidate.Email, FullName: Candidate.FullName, _id: Candidate._id}, 'RESTFULAPIs',{expiresIn: '24h'}), user_data: Candidate});
      }
    }
  });
}
exports.reset = function(req,res){
 
  Candidate.findOneAndUpdate({
  Email: req.body.Email
  },
  { $set: { Password: Candidate.hashpassword(req.body.NewPassword) }
 }, {upsert: true}, (err, newBook) => {
  if (err) {
   res.send('error updating ');
  } else {
   console.log(newBook);
   return res.send(newBook);
 }
});
  // return res.status(201).send(doc)
  // return res.send(Candidate)

  // Candidate.findOne({
  //   Email:req.body.Email
  // }, function(err, Candidate) {
  //   if (err) throw err;
  //   if (!Candidate) {
  //     return res.status(401).json({ message: 'Authentication failed. User not found.' });
  //   } else  {
  //     Candidate.Password =bcrypt.hashSync(req.body.NewPassword,10);
  //     return res.status(201).json(Candidate)
  //   }
  // });
}
exports.sign_in = function(req, res) {
    Candidate.findOne({
      Email: req.body.Email
    }, function(err, Candidate) {
      if (err) throw err;
      if (!Candidate) {
        res.status(401).json({ message: 'Authentication failed. User not found.' });
      } else if (Candidate) {
        if (!Candidate.isValid(req.body.Password)) {
          res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        } else {
          return res.json({token: jwt.sign({Email: Candidate.Email, FullName: Candidate.FullName, _id: Candidate._id}, 'RESTFULAPIs',{expiresIn: '24h'})});
        }
      }
    });
  };
exports.getuserBytoken = function(req,res,next){
  let token = req.query.token;
  jwt.verify(token,'RESTFULAPIs',function(err,tokendata){
    if(err){
      return res.status(400).json({message : 'unauthorised request'})
    }
    if(tokendata){
      Candidate.find({ 'Email': tokendata.Email}).then(candidate=>{
        return res.status(200).send(candidate);
     })
    }
  })
}


exports.update = (req, res) => {
 
  let id = req.body._id
  let email = req.body.Email
  let candidate = {
    FullName:req.body.FullName,
    Email:req.body.Email,
    // Password:Candidate.hashpassword(req.body.NewPassword),
    Gender:req.body.Gender,
    DOB:req.body.DOB,
    Qualification:req.body.Qualification,
    Experience:req.body.Experience,
    MobileNo:req.body.MobileNo,
    AlternativeNo:req.body.AlternativeNo,
    Aadhar:req.body.Aadhar,
    AboutYourself:req.body.AboutYourself,
    Language:req.body.Language,
    Address:req.body.Address,
    Pincode:req.body.Pincode,
    Skill:req.body.Skill
    
  };
  Candidate.update({_id: id}, {$set:candidate},{new: true},function(err, doc){
    if(err){
        console.log(err);
    }

    console.log(doc);
});
  
};


exports.delete = function(req,res){
  Candidate.remove({id:req.params.id},function(err,candidate){
        if(err){
            res.status(500).send(err);
        }
        return res.status(201).send(candidate);
    });

}