/* eslint-disable no-console */
const mongoose = require('mongoose');
const instructorsData = require('../data/instructors.json');
const { InstructorsModel } = require('../models.js');

const instructorsInsert = () => {
  InstructorsModel.insertMany(instructorsData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('instructorsInsert success');
    mongoose.connection.close();
  });
};

instructorsInsert();
module.exports = instructorsInsert;
