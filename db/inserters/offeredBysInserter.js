/* eslint-disable no-console */
const offeredBysData = require('../data/offeredBys.json');
const { OfferedBysModel } = require('../models.js');

const offeredBysInsert = () => {
  const cb = (db, model) => {
    model.insertMany(offeredBysData)
      .then(() => {
        db.close();
        console.log('inserted offered bys');
      });
  };

  OfferedBysModel(cb);
};

offeredBysInsert();
module.exports = offeredBysInsert;
