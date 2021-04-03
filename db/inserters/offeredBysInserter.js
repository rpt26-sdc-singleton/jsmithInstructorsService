/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const offeredBysData = require('../data/offeredBys.json');
const { OfferedBys } = require('../models.js');

const offeredBysInsert = () => {
  OfferedBys.insertMany(offeredBysData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('offeredBysInsert success');
    // mongoose.connection.close();
  });
};

offeredBysInsert();
module.exports = offeredBysInsert;
