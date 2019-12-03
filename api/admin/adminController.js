var mongoose = require('mongoose');
var admin = mongoose.model('admin');

exports.findAll = function(req,res){
    admin.find().then(admin=>{
        return res.status(200).send(admin);
    }).catch(err=>{
        return res.status(500).send({
            message : err.message || 'Error occurred while fetching the admin!'
        });
    });
};

