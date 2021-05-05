module.exports = (m, record) => {
  m((db, model) => {
    // first get the id for the new instructor
    model.aggregate([{
      $group: {
        _id: 1,
        maxId: { $max: '$id' },
      },
    }])
      .then((max) => max[0].maxId + 1)
      .then((id) => {
        model.create({
          id,
          ...record,
        });
      });
  });
};
