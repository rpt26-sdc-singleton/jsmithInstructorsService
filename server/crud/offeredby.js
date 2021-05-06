/* eslint-disable no-console */
function offeredBy(app, db) {
  // get offeredBy by id
  app.get('/api/crud/offeredBy/:id', (req, res) => {
    db.readOfferedBy(req.params.id)
      .then((record) => {
        console.log(record);
        res.send(record);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(404);
      });
  });

  // create offeredBy
  // expected format:
  /*
  {
    name: string
    description: string
  }
  */
  app.post('/api/crud/offeredBy', (req, res) => {
    db.createOfferedBy(req.body)
      .then((id) => res.status(201).json(id))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });

  // update offeredBy
  app.put('/api/crud/offeredBy/:id', (req, res) => {
    db.updateOfferedBy(req.params.id, req.body)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
        // TODO: differentiate between
        // the case where there is no existing record (404)
        // and the case where something else went wrong (500).
      });
  });

  // delete offeredBy
  app.delete('/api/crud/offeredBy/:id', (req, res) => {
    db.deleteOfferedBy(req.params.id)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
        // TODO: differentiate between 404 and 500 as in update.
      });
  });
}

module.exports = offeredBy;
