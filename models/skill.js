const skills = [
    {skill: 'Javascript', level: 3, isSoftSkill: false},
    {skill: 'HTML', level: 4, isSoftSkill: false},
    {skill: 'CSS', level: 2, isSoftSkill: false},
    {skill: 'LinkedIn', level: 5, isSoftSkill: true},
    {skill: 'jQuery', level: 4, isSoftSkill: false},
    {skill: 'Networking', level: 2, isSoftSkill: true}
  ];

  module.exports = {
      skillsUp,
      skillUp,
      create,
      delete: deleteOne,
      update
  };

  function skillsUp() {
      return skills;
  }

  function skillUp(id) {
      return skills[id];
  }

  function create(skill){
      skills.push(skill);
  }

  function deleteOne(id) {
      skills.splice(id,1);
  }

  function update(id, skill) {
    skills.splice(id, 1, skill);
  }