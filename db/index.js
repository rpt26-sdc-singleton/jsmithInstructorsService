/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const { InstructorsModel, OfferedBysModel, TestimonialsModel } = require('./models.js');

// returns all instructors for all courses
const findAllInstructors = (cb) => {
  InstructorsModel.find()
    .then((dbResponse) => {
      cb(null, dbResponse);
    })
    .catch((err) => {
      if (err) {
        console.error('Error in findAllInstructors DB method: ', err);
        cb(err);
      }
    });
};

// returns all instructors for a course
const findInstructors = (courseNumber, cb) => {
  const options = { courses: { $elemMatch: { courseNumber } } };
  InstructorsModel.find(options)
    .then((dbResponse) => {
      cb(dbResponse);
    })
    .catch((err) => {
      if (err) {
        console.error('Error in findInstructors DB method: ', err);
      }
    });
};

// returns the primary instructor for a course
const findPrimaryInstructor = (courseNumber, cb) => {
  const options = { courses: { $elemMatch: { courseNumber, isPrimaryInstructor: true } } };
  InstructorsModel.findOne(options)
    .then((dbResponse) => {
      cb(dbResponse);
      // mongoose.connection.close();
    })
    .catch((err) => {
      if (err) {
        console.error('Error in findPrimaryInstructor DB method: ', err);
      }
    });
};

// returns all offeredBy documents for all courses

const findAllOfferedBys = (cb) => {
  OfferedBysModel.find()
    .then((dbResponse) => {
      cb(null, dbResponse);
    })
    .catch((err) => {
      if (err) {
        console.error(err);
        cb(err);
      }
    });
};

// returns the offeredBy for a course
const findOfferedBy = (courseNumber, cb) => {
  const options = { id: courseNumber };

  OfferedBysModel.find(options)
    .then((dbResponse) => {
      cb(dbResponse);
      // mongoose.connection.close();
    })
    .catch((err) => {
      if (err) {
        console.error('Error in findOfferedBy DB method: ', err);
      }
    });
};

// returns three random testimonials
const findTestimonialsModel = (courseNumber, cb) => {
  const testimonialsIndexes = [];
  while (testimonialsIndexes.length < 3) {
    const random = Math.floor(Math.random() * 9);
    if (!testimonialsIndexes.includes(random)) {
      testimonialsIndexes.push(random);
    }
  }
  TestimonialsModel.find()
    .then((dbResponse) => {
      const output = [];
      testimonialsIndexes.forEach((index) => output.push(dbResponse[index]));
      cb(output);
      // mongoose.connection.close();
    })
    .catch((err) => {
      if (err) {
        console.error('Error in findTestimonialsModel DB method: ', err);
      }
    });
};

module.exports = {
  findAllInstructors,
  findInstructors,
  findPrimaryInstructor,
  findOfferedBy,
  findTestimonialsModel,
  findAllOfferedBys,
};
