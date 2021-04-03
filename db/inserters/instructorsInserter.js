const mongoose = require('mongoose');
const instructorsData = require('../data/instructors.json');
const { Instructors } = require('../models.js');

const instructorsInsert = () => {
  Instructors.insertMany(instructorsData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('instructorsInsert success');
    // mongoose.connection.close();
  });
};

instructorsInsert();
module.exports = instructorsInsert;
