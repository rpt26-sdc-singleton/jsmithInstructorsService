const mongoose = require('mongoose');
const instructorsSchema = require('./schemas/instructorsSchema.js');
const testimonialsSchema = require('./schemas/testimonialsSchema.js');
const offeredBysSchema = require('./schemas/offeredBysSchema.js');

mongoose.connect('mongodb://127.0.0.1/instructors', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'instructors connection error'));
db.once('open', () => {
  console.log('Connected to instructors db');
});

const Instructors = mongoose.model('instructors', instructorsSchema);
const OfferedBys = mongoose.model('offeredbys', offeredBysSchema);
const Testimonials = mongoose.model('testimonials', testimonialsSchema);

module.exports.Instructors = Instructors;
module.exports.OfferedBys = OfferedBys;
module.exports.Testimonials = Testimonials;
