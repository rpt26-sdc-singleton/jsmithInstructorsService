const mongoose = require('mongoose');

const { Schema } = mongoose;

const offeredBysSchema = new Schema({
  id: Number,
  name: String,
  description: String,
});

module.exports = offeredBysSchema;
