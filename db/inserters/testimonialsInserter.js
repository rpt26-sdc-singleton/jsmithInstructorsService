/* eslint-disable no-console */
const testimonialsData = require('../data/testimonials.json');
const { TestimonialsModel } = require('../models.js');

const testimonialsInsert = () => {
  const cb = (db, model) => {
    model.insertMany(testimonialsData)
      .then(() => {
        db.close();
        console.log('inserted testimonials');
      });
  };

  TestimonialsModel(cb);
};

testimonialsInsert();
