var Skill = require('../models/skill');


module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};


function index(req, res) {
    res.render('skills/index', {
         title: 'Dev Skills',
         skills: Skill.skillsUp()
    });
  }

  function show(req, res) {
      res.render('skills/show',{
          skill: Skill.skillUp(req.params.id),
          skillId: req.params.id

      });
  }

  function edit(req, res){
      res.render('skills/edit', {
          skill: Skill.skillUp(req.params.id),
          skillId: req.params.id
      });
  }

  function update(req, res){
      req.body.softSkill = req.body.softSkill === 'on';
      console.log(req.body)
      Skill.update(req.params.id, req.body);
      res.redirect(`/skills/${req.params.id}`);

  }

  function deleteSkill(req,res){
      Skill.deleteOne(req.params.id);
      res.redirect('/skills');
  }

  function create(req, res){
      Skill.create(req.body);
      res.redirect('/skills');

  }

  function newSkill(req, res){
      res.render('skills/new');
  }