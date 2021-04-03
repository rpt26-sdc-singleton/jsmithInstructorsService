const mongoose = require('mongoose');
const testimonialsData = require('../data/testimonials.json');
const { Testimonials } = require('../models.js');

const testimonialsInsert = () => {
  Testimonials.insertMany(testimonialsData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('testimonialsInsert success');
    mongoose.connection.close();
  });
};

testimonialsInsert();
module.exports.testimonialsInsert = testimonialsInsert;
