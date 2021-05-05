const create = require('./create');

function instructors(model) {
  return {
    createInstructor: (instructor) => {
      console.log('creating instructor line 6');
      console.log(model);
      console.log(instructor);
      create(model, instructor);
    },
  };
}

module.exports = instructors;
