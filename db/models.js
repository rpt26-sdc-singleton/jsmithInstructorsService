/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const instructorsSchema = require('./schemas/instructorsSchema.js');
const testimonialsSchema = require('./schemas/testimonialsSchema.js');
const offeredBysSchema = require('./schemas/offeredBysSchema.js');

dotenv.config();

const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const INSTRUCTORS = process.env.MONGO_DB_INSTRUCTORS || 'instructors';
const OFFEREDBYS = process.env.MONGO_DB_OFFEREDBYS || 'offeredbys';
const TESTIMONIALS = process.env.MONGO_DB_TESTIMONIALS || 'testimonials';

const createNewConnection = (name, schema, cb) => {
  const db = mongoose.createConnection(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db.on('error', (error) => {
    console.log(`MongoDB :: connection ${name} ${JSON.stringify(error)}`);
    db.close().catch(() => console.log(`MongoDB :: failed to close connection ${name}`));
  });

  db.on('connected', () => {
    console.log(`MongoDB :: connected ${name}`);
    cb(db, db.model(name, schema));
  });

  db.on('disconnected', () => {
    console.log(`MongoDB :: disconnected ${name}`);
  });

  return db;
};

const InstructorsModel = (cb) => createNewConnection(INSTRUCTORS, instructorsSchema, cb);
const OfferedBysModel = (cb) => createNewConnection(OFFEREDBYS, offeredBysSchema, cb);
const TestimonialsModel = (cb) => createNewConnection(TESTIMONIALS, testimonialsSchema, cb);

module.exports.InstructorsModel = InstructorsModel;
module.exports.OfferedBysModel = OfferedBysModel;
module.exports.TestimonialsModel = TestimonialsModel;
