/* eslint-disable no-console */
const read = require('./read');

function testimonial(app, db) {
  // get testimonial by id
  app.get('/api/testimonial/:id', (req, res) => {
    read(db, 'readTestimonial', req.params.id, res);
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
    db.createTestimonial(req.body)
      .then((id) => res.status(201).json(id))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });

  // update testimonial
  app.put('/api/testimonial/:id', (req, res) => {
    db.updateTestimonial(req.params.id, req.body)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
        // TODO: differentiate between
        // the case where there is no existing record (404)
        // and the case where something else went wrong (500).
      });
  });

  // delete testimonial
  app.delete('/api/testimonial/:id', (req, res) => {
    db.deleteTestimonial(req.params.id)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
        // TODO: differentiate between 404 and 500 as in update.
      });
  });
}

module.exports = testimonial;
