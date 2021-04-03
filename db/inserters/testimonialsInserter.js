/* eslint-disable no-console */
const mongoose = require('mongoose');
const testimonialsData = require('../data/testimonials.json');
const db = require('../models.js');

const testimonialsInsert = () => {
  db.TestimonialsModel.insertMany(testimonialsData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('testimonialsInsert success');
    mongoose.connection.close();
  });
};

testimonialsInsert();
module.exports.testimonialsInsert = testimonialsInsert;
