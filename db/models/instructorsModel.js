const mongoose = require('mongoose');
const instructorsSchema = require('../schemas/instructorsSchema.js');

mongoose.connect('mongodb://127.0.0.1/instructors', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'instructors connection error'));
db.once('open', () => {
  console.log('instructorsModel connected to db');
});

const Instructors = mongoose.model('instructors', instructorsSchema);

module.exports = Instructors;