/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const testimonialsSchema = require('../schemas/testimonialsSchema.js');

dotenv.config();

const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB_TESTIMONIALS = process.env.MONGO_DB_TESTIMONIALS || 'testimonials';

mongoose.connect(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB_TESTIMONIALS}`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'testimonials connection error'));
db.once('open', () => {
  console.log('testimonialsModel connected to db');
});

const TestimonialsModel = mongoose.model('testimonials', testimonialsSchema);

module.exports = TestimonialsModel;
