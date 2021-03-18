const mongoose = require('mongoose');
const instructorsData = require('../data/instructors.json');
const instructorsModel = require('../models/instructorsModel.js');

let instructorsInsert = () => {
  instructorsModel.insertMany(instructorsData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('instructorsInsert success');
    mongoose.connection.close();
  });
};

instructorsInsert();
module.exports = instructorsInsert;