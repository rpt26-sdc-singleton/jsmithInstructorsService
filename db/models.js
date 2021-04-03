/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const instructorsSchema = require('./schemas/instructorsSchema.js');
const testimonialsSchema = require('./schemas/testimonialsSchema.js');
const offeredBysSchema = require('./schemas/offeredBysSchema.js');

dotenv.config();
const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB_INSTRUCTORS = process.env.MONGO_DB_INSTRUCTORS || 'instructors';
const MONGO_DB_OFFEREDBYS = process.env.MONGO_DB_OFFEREDBYS || 'offeredbys';
const MONGO_DB_TESTIMONIALS = process.env.MONGO_DB_TESTIMONIALS || 'testimonials';

mongoose.connect(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB_INSTRUCTORS}`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'instructors db connection error'));
db.once('open', () => {
  console.log('Connected to instructors db');
});

const Instructors = mongoose.model(MONGO_DB_INSTRUCTORS, instructorsSchema);
const OfferedBys = mongoose.model(MONGO_DB_OFFEREDBYS, offeredBysSchema);
const Testimonials = mongoose.model(MONGO_DB_TESTIMONIALS, testimonialsSchema);

module.exports.Instructors = Instructors;
module.exports.OfferedBys = OfferedBys;
module.exports.Testimonials = Testimonials;
