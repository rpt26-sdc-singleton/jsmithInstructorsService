module.exports = (m, record) => {
  console.log('creating');
  m((db, model) => {
    // first get the id for the new instructor
    console.log('creating');
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
