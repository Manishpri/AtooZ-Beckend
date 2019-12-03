var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var saltRounds = 10;
var  autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/AtooZ");
 
autoIncrement.initialize(connection);

 


var candidateSchema = new Schema({
    
    FullName:{
        type:String,
        required:'Please enter your name'
    },
    Email:{
        type:String,
        unique:true,
        required:'Please enter your email'
    },
    Password:{
        type: String,
        required : 'Please enter the password'
    },
    Gender : {
        type : String,
        required : 'Please select gender'
    },
    DOB : {
        type: Date,
        required : 'Please enter your data of birth'

    },
    Qualification : {
        type : String,
        required : 'Please select your qualification' 
    },
    Experience : {
        type : String,
        required : 'Please select experience'
    },
    MobileNo : {
        type:Number,
        unique:true,
        required : 'Please enter your mobile number'
    },
    AlternativeNo : {
        type : Number
        
    },
    Aadhar : {
        type : Number,
        required : 'Please enter your Aadhar card number'
    },
    AboutYourself : {
        type : String
    },
    Language : {
        type : String,
        required : 'Please select at least one language '
    },
    Address : {
        type : String,
        required : 'Please enter your address'
    },
    Pincode : {
        type : Number,
        required:'Please enter your pin code'
    },
    skill_name : {
        type : Array,
        required : 'please select your skill'
    } ,

});
candidateSchema.plugin(autoIncrement.plugin, 'c_id');

        candidateSchema.statics.hashpassword = function hashpassword(Password){
            return bcrypt.hashSync(Password,10);
        }
    candidateSchema.methods.isValid = function (hashedpassword){
        return bcrypt.compareSync(hashedpassword,this.Password);
    }
module.exports = mongoose.model ('candidate', candidateSchema);

