const mongoose = require('mongoose');
// const instructorsSchema = require('./schemas/instructorsSchema');
// const offeredBysSchema = require('./schemas/offeredBysSchema');
// const testimonialsSchema = require('./schemas/testimonialsSchema');
const { Instructors, OfferedBys, Testimonials } = require('./models.js');
// const OfferedBys = require('./models/offeredBysModel');
// const Testimonials = require('./models/testimonialsModel');

const imagesPort = process.env.IMAGES_PORT;

//returns all instructors for all courses
findAllInstructors = (cb) => {
  Instructors.find()
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

//returns all instructors for a course
findInstructors = (courseNumber, cb) => {
  let options = {courses: {$elemMatch: { courseNumber }}};
  Instructors.find(options)
    .then((dbResponse) => {
      cb(dbResponse);
    })
    .catch((err) => {
      if (err) {
        console.error('Error in findInstructors DB method: ', err);
      }
    });
};

//returns the primary instructor for a course
findPrimaryInstructor = (courseNumber, cb) => {
  let options = {courses: {$elemMatch: { courseNumber, isPrimaryInstructor: true }}};
  Instructors.findOne(options)
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

//returns all offeredBy documents for all courses

findAllOfferedBys = (cb) => {
  OfferedBys.find()
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

//returns the offeredBy for a course
findOfferedBy = (courseNumber, cb) => {
  let options = { id: courseNumber };

  OfferedBys.find(options)
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

//returns three random testimonials
findTestimonials = (courseNumber, cb) => {
  let testimonialsIndexes = [];
  while (testimonialsIndexes.length < 3) {
    let random = Math.floor(Math.random() * 9);
    if (!testimonialsIndexes.includes(random)) {
      testimonialsIndexes.push(random);
    }
  }
  Testimonials.find()
    .then((dbResponse) => {
      let output = [];
      testimonialsIndexes.forEach((index) => output.push(dbResponse[index]));
      cb(output);
      // mongoose.connection.close();
    })
    .catch((err) => {
      if (err) {
        console.error('Error in findTestimonials DB method: ', err);
      }
    });
};

module.exports = { findAllInstructors, findInstructors, findPrimaryInstructor, findOfferedBy, findTestimonials, findAllOfferedBys };