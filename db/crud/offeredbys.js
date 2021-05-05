const create = require('./create');
const read = require('./read');
const update = require('./update');
const del = require('./delete');

function offeredBys(model) {
  return {
    createOfferedBy: (offeredBy) => create(model, offeredBy),
    readOfferedBy: (id) => read(model, id),
    updateOfferedBy: (id, offeredBy) => update(model, id, offeredBy),
    deleteOfferedBy: (id) => del(model, id),
  };
}

module.exports = offeredBys;
