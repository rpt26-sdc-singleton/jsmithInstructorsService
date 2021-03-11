const mongoose = require('mongoose');
const instructorsSchema = require('./instructorsSchema');
const offeredBysSchema = require('./offeredBysSchema');
const testimonialsSchema = require('./testimonialsSchema');


mongoose.connect('mongodb://localhost/instructors', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connection opened');
});

const Instructors = mongoose.model('instructors', instructorsSchema);
const OfferedBys = mongoose.model('offeredbys', offeredBysSchema);
const Testimonials = mongoose.model('testimonials', testimonialsSchema);
const imagesPort = 3006;

//returns an array of instructors that belong to a course
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
    })
    .catch((err) => {
      if (err) {
        console.error('Error in findPrimaryInstructor DB method: ', err);
      }
    });
};

//returns the offeredBy for a course
findOfferedBy = (courseNumber, cb) => {
  let options = { id: courseNumber };

  OfferedBys.find(options)
    .then((dbResponse) => {
      cb(dbResponse);
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
    })
    .catch((err) => {
      if (err) {
        console.error('Error in findTestimonials DB method: ', err);
      }
    });
};

module.exports.findInstructors = findInstructors;
module.exports.findPrimaryInstructor = findPrimaryInstructor;
module.exports.findOfferedBy = findOfferedBy;
module.exports.findTestimonials = findTestimonials;