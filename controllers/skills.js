var Skill = require('../models/skill');


module.exports = {
    index,
    show
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

      });
  }