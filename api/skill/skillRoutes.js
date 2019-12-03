module.exports = function(app){
    var skill = require('../skill/skillController');

    app.get('/api/skill',skill.findAll);
    app.post('/api/skill',skill.add);
    app.get('/api/skill/:skill_name',skill.findByskill);
    app.put('/api/skill/:skill',skill.update);
    app.delete('/api/skill/:skill',skill.delete);
}