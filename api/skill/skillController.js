var mongoose = require('mongoose');
var skill = mongoose.model('pp_skill');

exports.findAll = function(req,res){
        skill.find().then(skill =>{
            return res.status(200).send(skill);
        }).catch(err=>{
             res.status(500).send({
                message : err.message || 'Error occurred while fetching the skill'
            });
        });
};

module.exports.add = function(req,res){
    var skill  = new ({
        skill : req.params.skill
    });
    skill.save();
    res.status(200).send(skill);
};

exports.findByskill = function(req,res){

    // function get_all_skill(param){
    //     // var skills = [];
    //     // param.filter(obj => skills.push({ "skill_name": obj.get('skill_name') }));
    //     return param.map(obj => obj.get('skill_name'))
    // }
if(req.params.skill_name){
    skill.find().then(skill =>{

        return res.status(200).send(skill.map(obj => obj.get('skill_name')));
    }).catch(err=>{
         res.status(500).send({
            message : err.message || 'Error occurred while fetching the skill'
        });
    });

}
   
};

exports.update = function(req,res){
    skill.updateOne({skill : req.params.skill},function(err,skill){
        if(err){
            return res.status(500).send(err);

        }
        return res.status(200).send(skill);
    });
};

exports.delete = function(req,res){
    skill.remove({skill:req.params.skill},function(err,skill){
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send(skill);
    })
}
