const create = require('./create');
const read = require('./read');
const update = require('./update');
const del = require('./delete');

function instructors(model) {
  return {
    createInstructor: (instructor) => create(model, instructor),
    readInstructor: (id) => read(model, id),
    updateInstructor: (id, instructor) => update(model, id, instructor),
    deleteInstructor: (id) => del(model, id),
  };
}

module.exports = instructors;
