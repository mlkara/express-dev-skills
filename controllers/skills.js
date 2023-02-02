const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All My Skills'
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Breakdown'
    });
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill'});
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body);
    res.redirect('/skills');
  }

  function deleteskill(req, res) {
    skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }