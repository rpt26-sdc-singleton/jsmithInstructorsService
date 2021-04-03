/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB_INSTRUCTORS = process.env.MONGO_DB_INSTRUCTORS || 'instructors';
const MONGO_DB_OFFEREDBYS = process.env.MONGO_DB_OFFEREDBYS || 'offeredBys';
const MONGO_DB_TESTIMONIALS = process.env.MONGO_DB_TESTIMONIALS || 'testimonials';

const makeNewConnection = (uri) => {
  const db = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((err) => console.error(err));

  db.on('error', console.error.bind(console, 'DB connection error on URI: ', uri));
  db.once('open', () => {
    console.log('DB connection opened on URI: ', uri);
  });

  return db;
};

const InstructorsModel = makeNewConnection(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB_INSTRUCTORS}`);
const OfferedBysModel = makeNewConnection(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB_OFFEREDBYS}`);
const TestimonialsModel = makeNewConnection(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB_TESTIMONIALS}`);

module.exports = {
  InstructorsModel,
  OfferedBysModel,
  TestimonialsModel,
};
