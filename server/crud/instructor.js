/* eslint-disable no-console */
function instructor(app, db) {
  // get instructor by id
  app.get('/api/instructor/:id', (req, res) => {
    db.readInstructor(req.params.id)
      .then((record) => res.send(record))
      .catch((err) => {
        console.error(err);
        res.sendStatus(404);
      });
  });

  // create instructor
  // expected format:
  /*
  {
    firstName: string,
    middleInitial: string,
    lastName: string,
    academicTitle: string,
    title: string,
    organization: string,
    courses: [
      {
        courseNumber: number,
        isPrimaryInstructor: bool
      }
    ],
    instructorAverageRating: number,
    numberOfRatings: number
  }
  */
  // example body:
  /*
 {
    "firstName": "George",
    "middleInitial": "W",
    "lastName": "Carver",
    "academicTitle": "PhD",
    "title": "Professor",
    "organization": "JIF",
    "courses": [
      {
        "courseNumber": 1,
        "isPrimaryInstructor": true
      },
      {
        "courseNumber": 2,
        "isPrimaryInstructor": false
      },
      {
        "courseNumber": 3,
        "isPrimaryInstructor": false
      }
    ],
    "instructorAverageRating": 4,
    "numberOfRatings": 4
}
 */
  app.post('/api/instructor', (req, res) => {
    db.createInstructor(req.body)
      .then((id) => res.status(201).json(id))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  });

  // update instructor
  app.put('/api/instructor/:id', (req, res) => {
    db.updateInstructor(req.params.id, req.body)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
        // TODO: differentiate between
        // the case where there is no existing record (404)
        // and the case where something else went wrong (500).
      });
  });

  // delete instructor
  app.delete('/api/instructor/:id', (req, res) => {
    db.deleteInstructor(req.params.id)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
        // TODO: differentiate between 404 and 500 as in update.
      });
  });
}

module.exports = instructor;
