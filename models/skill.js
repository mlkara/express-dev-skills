const skills = [
    {id: 125223, skill: 'Learn Express', done: true},
    {id: 127904, skill: 'Develop Skills', done: false},
    {id: 139608, skill: 'Mind your skills', done: true},
  ];
	
  module.exports = {
    getAll,
    getOne,
    create
  };
    
  function create(skill) {
   
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }