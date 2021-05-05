module.exports = (m, id) => new Promise((resolve, reject) => {
  m((db, model) => {
    model.remove({ id })
      .then(() => resolve())
      .catch((err) => reject(err));
  });
});
