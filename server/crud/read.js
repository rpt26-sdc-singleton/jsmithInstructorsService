/* eslint-disable no-console */
module.exports = (db, method, arg, res) => {
  db[method](arg)
    .then((record) => {
      if (record) {
        res.send(record);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
