/* eslint-disable no-console */
/* eslint-disable radix */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../db/index.js');

const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

app.get('/:courseNumber', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')));

// returns all instructors documents
app.get('/api/allinstructors', (req, res) => db.findAllInstructors((dbResponse) => res.send(dbResponse)));

// returns an array of instructors that belong to a course
app.get('/api/instructors/:courseNumber', (req, res) => db.findInstructors(parseInt(req.params.courseNumber), (dbResponse) => res.send(dbResponse)));

// returns the primary instructor for a course
app.get('/api/primaryInstructor/:courseNumber', (req, res) => db.findPrimaryInstructor(parseInt(req.params.courseNumber), (dbResponse) => res.send(dbResponse)));

// returns all offeredBy documents for all courses
app.get('/api/offeredByAll', (req, res) => db.findAllOfferedBys((dbResponse) => res.send(dbResponse)));

// returns the offeredBy for a course
app.get('/api/offeredBy/:courseNumber', (req, res) => db.findOfferedBy(parseInt(req.params.courseNumber), (dbResponse) => res.send(dbResponse)));

// returns three random testimonials
app.get('/api/testimonials/:courseNumber', (req, res) => db.threeRandomTestimonials(parseInt(req.params.courseNumber), (dbResponse) => res.send(dbResponse)));

// crud routes defined separately
require('./crud/instructor.js')(app, db);
require('./crud/offeredby.js')(app, db);
require('./crud/testimonial.js')(app, db);

app.listen(port, () => console.log(`Instructors service listening at http://localhost:${port}`));
