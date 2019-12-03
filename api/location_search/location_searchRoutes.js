module.exports = function(app){
    var location = require('../location_search/location_searchController');

    app.get('/api/location/',location.findAll);
    app.get('/api/location/:location',location.findAll);
}