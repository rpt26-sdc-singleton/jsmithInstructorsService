module.exports = (m, id) => new Promise((resolve, reject) => {
  m((db, model) => {
    model.findOne({ id })
      .then((record) => resolve(record))
      .catch((err) => reject(err));
  });
});
