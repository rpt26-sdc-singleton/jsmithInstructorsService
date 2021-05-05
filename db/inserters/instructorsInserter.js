/* eslint-disable no-console */
const instructorsData = require('../data/instructors.json');
const { InstructorsModel } = require('../models.js');

const instructorsInsert = () => {
  const cb = (db, model) => {
    model.insertMany(instructorsData)
      .then(() => {
        db.close();
        console.log('inserted instructors');
      });
  };

  InstructorsModel(cb);
};

instructorsInsert();
module.exports = instructorsInsert;
