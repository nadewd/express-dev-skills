const skills = [
    {id: 3867, skill: 'HTML', started: 'Week 2', completed: true},
    {id: 3190, skill: 'CSS', started: 'Week 2', completed: true},
    {id: 3255, skill: 'JavaScript', started: 'Week 1', completed: true},
    {id: 3471, skill: 'Express', started: 'Week 4', completed: false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
   // update
};

function deleteOne(id) {
    id = parseInt(id);
    // Find the index for the todo
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.started = "Unknown";
    skill.completed = false;
    skills.push(skill);
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function getAll() {
    return skills;
}