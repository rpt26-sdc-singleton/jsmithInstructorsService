/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const instructorsSchema = require('../schemas/instructorsSchema.js');

dotenv.config();

const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB_INSTRUCTORS = process.env.MONGO_DB_INSTRUCTORS || 'instructors';

mongoose.connect(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB_INSTRUCTORS}`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'instructors connection error'));
db.once('open', () => {
  console.log('instructorsModel connected to db');
});

const InstructorsModel = mongoose.model('instructors', instructorsSchema);

module.exports = InstructorsModel;
