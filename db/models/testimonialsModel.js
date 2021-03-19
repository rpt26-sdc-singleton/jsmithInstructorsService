const mongoose = require('mongoose');
const testimonialsSchema = require('../schemas/testimonialsSchema.js');

mongoose.connect('mongodb://127.0.0.1/instructors', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'testimonials connection error'));
db.once('open', () => {
  console.log('testimonialsModel connected to db');
});

const Testimonials = mongoose.model('testimonials', testimonialsSchema);

module.exports = Testimonials;