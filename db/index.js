/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const { InstructorsModel, OfferedBysModel, TestimonialsModel } = require('./models.js');

const dbCb = (method, cb, options) => (db, model) => {
  model[method](options)
    .then((r) => cb(r))
    .catch((err) => console.error(err))
    .finally(() => db.close());
};

// returns all instructors for all courses
const findAllInstructors = (cb) => InstructorsModel(dbCb('find', cb));

// returns all instructors for a course
const findInstructors = (courseNumber, cb) => InstructorsModel(dbCb('find', cb, { courses: { $elemMatch: { courseNumber } } }));

// returns the primary instructor for a course
const findPrimaryInstructor = (courseNumber, cb) => InstructorsModel(dbCb('findOne', cb, { courses: { $elemMatch: { courseNumber, isPrimaryInstructor: true } } }));

// returns all offeredBy documents for all courses
const findAllOfferedBys = (cb) => OfferedBysModel(dbCb('find', cb));

// returns the offeredBy for a course
const findOfferedBy = (courseNumber, cb) => OfferedBysModel(dbCb('find', cb, { id: courseNumber }));

// returns three random testimonials
const threeRandomTestimonials = (courseNumber, cb) => {
  const testimonialsIndexes = [];
  while (testimonialsIndexes.length < 3) {
    const random = Math.floor(Math.random() * 9);
    if (!testimonialsIndexes.includes(random)) {
      testimonialsIndexes.push(random);
    }
  }

  TestimonialsModel((db, model) => {
    model.find()
      .then((r) => {
        cb(testimonialsIndexes.map((index) => r[index]));
      })
      .catch((err) => {
        console.error('error in threeRandomTestimonials in db/index.js');
        console.error(err);
      })
      .finally(() => db.close());
  });
};

module.exports = {
  findAllInstructors,
  findInstructors,
  findPrimaryInstructor,
  findOfferedBy,
  threeRandomTestimonials,
  findAllOfferedBys,
};
