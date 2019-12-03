'use strict';
var express = require('express');
var router = express.Router();

module.exports = function(app){
    var posted_job = require('../posted_job/posted_jobController');
    app.get('/api/postedjob',posted_job.findAll);
    app.post('/api/postedjob',posted_job.add);

    //  get by Name

     app.get('/api/postedjob/:Company_id',posted_job.findBypost_id);
     app.put('/api/postedjob/:_id',posted_job.update);
     app.delete('/api/postedjob/:_id',posted_job.delete);
}
