const jwt = require('jsonwebtoken');
const express = require("express");
const logger = require('morgan');
var cors = require('cors');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require('path');
const app = express();
app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
const AutoIncrement = require('mongoose-sequence')(mongoose);
// Creating connection to database using AtooZ
mongoose.connect("mongodb://localhost:27017/AtooZ",{useNewUrlParser:true, useUnifiedTopology: false,useFindAndModify: false}).then(
    () => {console.log('Database connection is successful')},
    err => {console.log('Error when connecting to the database'+ err)}
);
mongoose.set('useCreateIndex',true);

const conn = mongoose.connection;
var passport = require('passport');
var session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    name:'myname.sid',
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:36000000,
        httpOnly:false,
        secure:false
    }
}));
require('./shared/passport-config');
app.use(passport.initialize());
app.use(passport.session());


register = require('./api/registration/registerModel');
applied_job = require('./api/applied_job/applied_jobModel');
area = require('./api/areas/areasModel');
candidate = require('./api/candidates/candidateModel');
company = require('./api/companies/companiesModel');
contactUs = require('./api/contactUs/contactUsModel');
location = require('./api/location_search/location_searchModel');
pp_lang = require('./api/pp_lang/pp_langModel');
posted_job = require('./api/posted_job/posted_jobModel');
pp_area = require('./api/pp_area/pp_areaModel');
pp_countries = require('./api/pp_countries/pp_countriesModel');
pp_lang = require('./api/pp_lang/pp_langModel');
pp_qualification = require('./api/pp_qualification/pp_qualificationModel');
pp_skill = require('./api/skill/skillModel');
admin = require('./api/admin/adminModel');
//calling routes

var routes = require('./api/registration/registerRoutes'); routes(app);
var routes = require('./api/applied_job/applied_jobRoutes');routes(app);
var routes = require('./api/areas/areasRoutes'); routes(app);
var routes = require('./api/candidates/candidateRoutes'); routes(app);
var routes = require('./api/companies/companiesRoutes'); routes(app);
var routes = require('./api/contactUs/contactUsRoutes'); routes(app);
var routes = require('./api/pp_lang/pp_langRoutes'); routes(app);
var routes = require('./api/location_search/location_searchRoutes'); routes(app);
var routes = require('./api/posted_job/posted_jobRoutes'); routes(app);
var routes = require('./api/pp_area/pp_areaRoutes'); routes(app);
var routes = require('./api/pp_countries/pp_countriesRoutes'); routes(app);
var routes = require('./api/pp_lang/pp_langRoutes'); routes(app);
var routes = require('./api/pp_qualification/pp_qualificationRoutes'); routes(app);
var routes = require('./api/skill/skillRoutes'); routes(app);
var routes = require('./api/admin/adminRoutes'); routes(app);
var routes = require('./api/candidate_login/candidate_loginRoutes');routes(app);
var routes = require('./api/company_login/company_loginRoutes');routes(app);

app.listen(port,()=>{
    console.log("server is running on:"+ port);
})