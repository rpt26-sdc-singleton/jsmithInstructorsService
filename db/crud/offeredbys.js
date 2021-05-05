const create = require('./create');

function offeredBys(model) {
  return {
    createOfferedBy: (offeredBy) => create(model, offeredBy),
  };
}

module.exports = offeredBys;
