/* eslint-disable no-console */
const mongoose = require('mongoose');
const testimonialsData = require('../data/testimonials.json');
const TestimonialsModel = require('../models/testimonialsModel.js');

const testimonialsInsert = () => {
  TestimonialsModel.insertMany(testimonialsData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('testimonialsInsert success');
    mongoose.connection.close();
  });
};

testimonialsInsert();
module.exports.testimonialsInsert = testimonialsInsert;
