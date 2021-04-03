/* eslint-disable no-console */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const offeredBysSchema = require('../schemas/offeredBysSchema.js');

dotenv.config();

const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB_OFFEREDBYS = process.env.MONGO_DB_OFFEREDBYS || 'offeredBys';

mongoose.connect(`mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB_OFFEREDBYS}`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'offeredBys connection error'));
db.once('open', () => {
  console.log('offeredBysModel connected to db');
});

const OfferedBysModel = mongoose.model('offeredBys', offeredBysSchema);

module.exports = OfferedBysModel;
