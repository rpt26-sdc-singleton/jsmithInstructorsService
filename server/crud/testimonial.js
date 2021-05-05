/* eslint-disable no-console */
function testimonial(app, db) {
  // get testimonial by id
  app.get('/api/testimonial/:id', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    db.readTestimonial(req.params.id, (record) => res.send(record));
  });

  // create testimonial
  // expected format:
  /*
  {
    name: string,
    text: string
  }
  */
  app.post('/api/testimonial', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    db.createTestimonial(req.body);
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
