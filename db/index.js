/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const { InstructorsModel, OfferedBysModel, TestimonialsModel } = require('./models.js');

// returns all instructors for all courses
const findAllInstructors = (cb) => {
  const dbCb = (db, model) => {
    model.find()
      .then((r) => {
        cb(null, r);
      })
      .catch((err) => {
        console.error('error in findAllInstructors in db/index.js');
        console.error(err);
        cb(err);
      })
      .finally(() => db.close());
  };

  InstructorsModel(dbCb);
};

// returns all instructors for a course
const findInstructors = (courseNumber, cb) => {
  const options = { courses: { $elemMatch: { courseNumber } } };
  const dbCb = (db, model) => {
    model.find(options)
      .then((r) => {
        cb(r);
      })
      .catch((err) => {
        console.error('error in findInstructors in db/index.js');
        console.error(err);
      })
      .finally(() => db.close());
  };

  InstructorsModel(dbCb);
};

// returns the primary instructor for a course
const findPrimaryInstructor = (courseNumber, cb) => {
  const options = { courses: { $elemMatch: { courseNumber, isPrimaryInstructor: true } } };

  const dbCb = (db, model) => {
    model.findOne(options)
      .then((r) => {
        cb(r);
      })
      .catch((err) => {
        console.error('error in findPrimaryInstructor in db/index.js');
        console.error(err);
      })
      .finally(() => db.close());
  };

  InstructorsModel(dbCb);
};

// returns all offeredBy documents for all courses

const findAllOfferedBys = (cb) => {
  const dbCb = (db, model) => {
    model.find()
      .then((r) => {
        cb(null, r);
      })
      .catch((err) => {
        console.error('error in findAllOfferedBys in db/index.js');
        console.error(err);
        cb(err);
      })
      .finally(() => db.close());
  };

  OfferedBysModel(dbCb);
};

// returns the offeredBy for a course
const findOfferedBy = (courseNumber, cb) => {
  const options = { id: courseNumber };

  const dbCb = (db, model) => {
    model.find(options)
      .then((r) => {
        cb(r);
      })
      .catch((err) => {
        console.error('error in findOfferedBy in db/index.js');
        console.error(err);
      })
      .finally(() => db.close());
  };

  OfferedBysModel(dbCb);
};

// returns three random testimonials
const threeRandomTestimonials = (courseNumber, cb) => {
  const testimonialsIndexes = [];
  while (testimonialsIndexes.length < 3) {
    const random = Math.floor(Math.random() * 9);
    if (!testimonialsIndexes.includes(random)) {
      testimonialsIndexes.push(random);
    }
  }

  const dbCb = (db, model) => {
    model.find()
      .then((r) => {
        cb(testimonialsIndexes.map((index) => r[index]));
      })
      .catch((err) => {
        console.error('error in threeRandomTestimonials in db/index.js');
        console.error(err);
      })
      .finally(() => db.close());
  };

  TestimonialsModel(dbCb);
};

module.exports = {
  findAllInstructors,
  findInstructors,
  findPrimaryInstructor,
  findOfferedBy,
  threeRandomTestimonials,
  findAllOfferedBys,
};
