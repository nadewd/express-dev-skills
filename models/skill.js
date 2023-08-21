const skills = [
    {id: 3867, skill: 'HTML', completed: true},
    {id: 3190, skill: 'CSS', completed: true},
    {id: 3255, skill: 'JavaScript', completed: true},
    {id: 3471, skill: 'Express', completed: false}
];

module.exports = {
    getAll,
    getOne,
    create,
   // deleteOne,
   // update
};

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}