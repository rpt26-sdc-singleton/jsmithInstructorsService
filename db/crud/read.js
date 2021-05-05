module.exports = (m, id, cb) => {
  m((db, model) => {
    // first get the id for the new instructor
    model.find({ id })
      .then((record) => {
        cb(record);
      });
  });
};
