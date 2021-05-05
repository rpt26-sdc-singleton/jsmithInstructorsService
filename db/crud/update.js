module.exports = (m, id, record) => new Promise((resolve, reject) => {
  m((db, model) => {
    model.update({ id }, record)
      .then(() => resolve())
      .catch((err) => reject(err));
  });
});
