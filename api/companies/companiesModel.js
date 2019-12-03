var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var  autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/AtooZ");
 
autoIncrement.initialize(connection);
// const mongooseIncreament = require('mongoose-increment');
// const increment = mongooseIncreament(mongoose);

var companySchema = Schema({
    FullName : {
        type : String,
        required:'Please enter your name'
    },
    Email : {
        type:String,
        unique:true,
        required:'Please enter your email'
    },
    Password : {
        type:String,
        required : 'Please enter the password'
    },
    MobileNo : {
        type:Number,
        unique:true,
        required:'Please enter your mobile number'
    },
    LandlineNo : {
        type:Number,
        required:'Please enter your landline number'
    },
    CompanyName : {
        type:String,
        required:'Please enter your company name'
    },
    Industry : {
        type:String,
        required:'Please enter your industry name'
    },
    Organisation : {
        type:String,
        required:'Please enter your organisation name'
    },
    State : {
        type:String,
        required:'Please enter your state'
    },
    District : {
        type:String,
        required:'Please enter your district name'
    },
    Area : {
        type:String,
        required:'Please enter your area'
    },
    Pincode : {
        type:Number,
        required:'Please enter pincode '
    },
    NumberofEmployee : {
        type:String,
        required:'Please enter total number of employee'
    },
    GSTNumber : {
        type:String,
        required:'Please enter your GST number'
    },
    CompanyAddress : {
        type:String,
        required:'Please enter company addres '
    },
    CompanyDiscription : {
        type:String,
        required:'Please enter discription'
    }

});
companySchema.plugin(autoIncrement.plugin, 'companyid');
// companySchema.plugin(increment, {
//     modelName: 'company',
//     fieldName: 'company_id',
//   });
companySchema.statics.hashpassword = function hashpassword(Password){
    return bcrypt.hashSync(Password,10);
}
companySchema.methods.isValid = function (hashedpassword){
return bcrypt.compareSync(hashedpassword,this.Password);
}
module.exports = mongoose.model('company',companySchema);