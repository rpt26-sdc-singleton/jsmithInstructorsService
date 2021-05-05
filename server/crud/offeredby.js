/* eslint-disable no-console */
function offeredBy(app) {
  // get offeredBy by id
  app.post('/api/offeredBy/:id', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
  });

  // create offeredBy
  app.post('/api/offeredBy', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
  });

  // update offeredBy
  app.post('/api/offeredBy/:id', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
  });

  // delete offeredBy
  app.delete('/api/offeredBy/:id', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
  });
}

module.exports = offeredBy;
