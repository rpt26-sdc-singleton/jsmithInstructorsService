const mongoose = require('mongoose');
const offeredBysSchema = require('../schemas/offeredBysSchema.js');

mongoose.connect('mongodb://127.0.0.1/instructors', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'offeredBys connection error'));
db.once('open', () => {
  console.log('offeredBysInsert connected to db');
});

const OfferedBys = mongoose.model('offeredbys', offeredBysSchema);

module.exports = OfferedBys;