const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
  };

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
};

function create(req, res) {
    console.log(req.body);
    // Models are responible for CRUD'ing data
    Skill.create(req.body);
    // Always do a redirect when data has been changed
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id), // Express's req.params object will have a property for each route parameter defined
    title: 'Skill Details'
  });
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'Express Dev Skills'
    });
  }