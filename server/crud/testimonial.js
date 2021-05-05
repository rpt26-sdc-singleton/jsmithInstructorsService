/* eslint-disable no-console */
function testimonial(app) {
  // get testimonial by id
  app.get('/api/testimonial/:id', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
  });

  // create testimonial
  app.post('/api/testimonial', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
  });

  // update testimonial
  app.put('/api/testimonial/:id', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
  });

  // delete testimonial
  app.delete('/api/testimonial/:id', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
  });
}

module.exports = testimonial;
