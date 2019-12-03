var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    id : {
        type : Number,
        trim : true,
        index : true,
        unique : true,
        uniqueCaseInsensitive : true,
        required : 'Please enter the Id'

    },
    FullName:{
        type:String,
        required:'Please enter your name'
    },
    Email:{
        type:String,
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
    skill : {
        type : String,
        required : 'please select your skill'
    } 
});

// hash user password before saving into database
TaskSchema.static.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}
TaskSchema.methods.isValid = function(hashedpassword){
    return bcrypt.compareSync(hashedpassword,this.password);
}

module.exports = mongoose.model ('register', TaskSchema);
