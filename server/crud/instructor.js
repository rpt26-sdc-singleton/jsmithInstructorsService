/* eslint-disable no-console */
function instructor(app, db) {
  // get instructor by id
  app.get('/api/instructor/:id', (req, res) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    res.sendStatus(501);
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
    console.log(req.path);
    console.log(req.params);
    console.log(req.body);
    console.warn('I AM NOT CERTAIN WE ARE HITTING THIS ENDPOINT');
    db.createInstructor(req.body);
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
