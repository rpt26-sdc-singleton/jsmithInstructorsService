const mongoose = require('mongoose');
const offeredBysData = require('../data/offeredBys.json');
const offeredBysModel = require('../models/offeredBysModel.js');

let offeredBysInsert = () => {
  offeredBysModel.insertMany(offeredBysData, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('offeredBysInsert success');
    mongoose.connection.close();
  });
};

offeredBysInsert();
module.exports = offeredBysInsert;