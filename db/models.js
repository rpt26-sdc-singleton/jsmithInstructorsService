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

const createNewConnection = (name) => {
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
  });

  db.on('disconnected', () => {
    console.log(`MongoDB :: disconnected ${name}`);
  });

  return db;
};

const InstructorsModel = createNewConnection(MONGO_DB_INSTRUCTORS)
  .model(MONGO_DB_INSTRUCTORS, instructorsSchema);
const OfferedBysModel = createNewConnection(MONGO_DB_OFFEREDBYS)
  .model(MONGO_DB_OFFEREDBYS, offeredBysSchema);
const TestimonialsModel = createNewConnection(MONGO_DB_TESTIMONIALS)
  .model(MONGO_DB_TESTIMONIALS, testimonialsSchema);

module.exports.InstructorsModel = InstructorsModel;
module.exports.OfferedBysModel = OfferedBysModel;
module.exports.TestimonialsModel = TestimonialsModel;
