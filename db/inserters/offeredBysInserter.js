/* eslint-disable no-console */
const mongoose = require('mongoose');
const offeredBysData = require('../data/offeredBys.json');
const OfferedBysModel = require('../models/offeredBysModel.js');

const offeredBysInsert = () => {
  OfferedBysModel.insertMany(offeredBysData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('offeredBysInsert success');
    mongoose.connection.close();
  });
};

offeredBysInsert();
module.exports = offeredBysInsert;
