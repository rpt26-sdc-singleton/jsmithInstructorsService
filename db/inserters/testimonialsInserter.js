const mongoose = require('mongoose');
const testimonialsData = require('../data/testimonials.json');

let testimonialsInsert = () => {
  mongoose.connect('mongodb://127.0.0.1/instructors', { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'testimonials connection error'));
  db.once('open', () => {
    console.log('testimonialsInsert service connected to db');
  });

  const testimonialSchema = new mongoose.Schema({
    id: Number,
    name: String,
    testimonialText: String
  });

  const Testimonial = mongoose.model('Testimonial', testimonialSchema);

  Testimonial.insertMany(testimonialsData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('testimonialsInsert success');
    mongoose.connection.close();
  });
};

testimonialsInsert();
module.exports.testimonialsInsert = testimonialsInsert;