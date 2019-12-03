var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var Company = mongoose.model('company');
const nodemailer = require('nodemailer');
exports.findAll = function(req,res){
  Company.find().then(company =>{
    return  res.status(200).send(company);
  }).catch(err =>{
      res.status(500).send({
          message: err.message || "Some error occurred while fetching company details"
      });
  });
};

exports.add = async function(req,res){
  try { 
  var company = new Company({
    FullName:req.body.FullName,
    Email:req.body.Email,
    Password:Company.hashpassword(req.body.Password),
    MobileNo:req.body.MobileNo,
    LandlineNo:req.body.LandlineNo,
    CompanyName:req.body.CompanyName,
    Industry:req.body.Industry,
    Organisation:req.body.Organisation,
    State:req.body.State,
    District:req.body.District,
    Area:req.body.Area,
    Pincode:req.body.Pincode,
    NumberofEmployee:req.body.NumberofEmployee,
    GSTNumber:req.body.GSTNumber,
    CompanyAddress:req.body.CompanyAddress,
    CompanyDiscription:req.body.CompanyDiscription
    
     
      
  });
  
    doc = await company.save();
    var smtpTransport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "manishkhasraj14@gmail.com",
        pass: 'Mack@111'
      }
    });

    mailOptions={
        from:'"manish"<manish@octaloptimum.com>',
        to :company.Email,
        subject : "Atoozjobs",
        html : "<h4>Registration successfully!!!!</h4><h2>"+company.Email+"</h2>"
    }

    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            msg='Server is not responding, Please try again latter'
            errors=[{msg}];
        }   
    })
    return res.status(200).json(doc);
  }
  catch(err){
      return res.status(501).json(err);
  }
   
};

exports.sign_in = function(req, res) {
  Company.findOne({
    Email: req.body.Email
  }, function(err, Company) {
    if (err) throw err;
    if (!Company) {
      res.status(401).json({ message: 'Authentication failed. User not found.' });
    } else if (Company) {
      if (!Company.isValid(req.body.Password)) {
        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
      } else {
        return res.json({token: jwt.sign({ Email: Company.Email, FullName: Company.FullName, _id: Company._id}, 'RESTFULAPIs',{expiresIn: '24h'}),user_data: Company});
      }
    }
  });
};


exports.finduserBytoken=function (req,res,next){
  let token = req.query.token;
  jwt.verify(token,'RESTFULAPIs',function(err,tokendata){
    if(err){
      return res.status(400).json({message : 'unauthorised request'})
    }
    if(tokendata){
      
      
      Company.find({ 'Email': tokendata.Email}).then(company=>{
        return res.status(200).send(company);
     })
  
    }
  })
}

// exports.findByEmail =  (req,res,next)=>{
//   Company.find({ 'Email': req.params.document}).then(company=>{
//         return res.status(200).send(company);
//      })
//    .catch(err =>{
//         res.status(500).send({
//             message :err.message || "some error occurred while retrieving register" + req.params.Email
//         });
//    });
//   // console.log('helo');
// };

exports.update = (req, res) => {
  let id = req.body._id
  let company = {
    FullName:req.body.FullName,
    Email:req.body.Email,
    // Password:Company.hashpassword(req.body.Password),
    MobileNo:req.body.MobileNo,
    LandlineNo:req.body.LandlineNo,
    CompanyName:req.body.CompanyName,
    Industry:req.body.Industry,
    Organisation:req.body.Organisation,
    State:req.body.State,
    District:req.body.District,
    Area:req.body.Area,
    Pincode:req.body.Pincode,
    NumberofEmployee:req.body.NumberofEmployee,
    GSTNumber:req.body.GSTNumber,
    CompanyAddress:req.body.CompanyAddress,
    CompanyDiscription:req.body.CompanyDiscription
    
  };
    Company.update({_id:id},{$set: company},{new: true},).then(
      () => {
        return res.status(201).send({
          message: 'Thing updated successfully!'
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
  Company.remove({Email:req.params.Email},function(err,company){
      if(err){
          res.status(500).send(err);
      }
      return res.status(201).send(company);
  });

}