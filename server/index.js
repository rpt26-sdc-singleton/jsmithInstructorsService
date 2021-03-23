const express = require('express');
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());

app.get('/:courseNumber', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

//returns an array of instructors that belong to a course
app.get('/api/instructors/:courseNumber', (req, res) => {
  db.findInstructors(parseInt(req.params.courseNumber), (dbResponse) => {
    // console.log('sending dbResponse: ', dbResponse);
    res.send(dbResponse);
  });
});

//returns the primary instructor for a course
app.get('/api/primaryInstructor/:courseNumber', (req, res) => {
  db.findPrimaryInstructor(parseInt(req.params.courseNumber), (dbResponse) => {
    res.send(dbResponse);
  });
});

//returns all instructors for all courses (for images seed script)
app.get('/api/allInstructors', (req, res) => {
  db.findPrimaryInstructor(parseInt(req.params.courseNumber), (dbResponse) => {
    res.send(dbResponse);
  });
});

//returns the offeredBy for a course
app.get('/api/offeredBy/:courseNumber', (req, res) => {
  db.findOfferedBy(parseInt(req.params.courseNumber), (dbResponse) => {
    res.send(dbResponse);
  });
});

//returns three random testimonials
app.get('/api/testimonials/:courseNumber', (req, res) => {
  db.findTestimonials(parseInt(req.params.courseNumber), (dbResponse) => {
    res.send(dbResponse);
  });
});

app.listen(port, () => {
  console.log(`Instructors service listening at http://localhost:${port}`);
});