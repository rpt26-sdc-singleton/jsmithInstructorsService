const create = require('./create');

function instructors(model) {
  return {
    createInstructor: (instructor) => {
      create(model, instructor);
    },
  };
}

module.exports = instructors;
