/* eslint-disable no-console */
function instructor(app) {
  // get instructor by id
  app.get('/api/instructor/:id', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
  });

  // create instructor
  app.post('/api/instructor', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
  });

  // update instructor
  app.post('/api/instructor/:id', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
  });

  // delete instructor
  app.delete('/api/instructor/:id', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
  });
}

module.exports = instructor;
