/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const fs = require('fs');

const numberToGenerate = 10000000; // ten million

// generating instructors out of core (it uses too much memory to do it in core)
// reference here: https://stackoverflow.com/a/43370201/13920055
// and here: https://nodejs.org/api/fs.html#fs_fs_createwritestream_path_options
const generateInstructors = () => {
  const schools = [
    'Alfred University',
    'Baylor University',
    'Centenary University',
    'Dallas Christian College',
    'East Carolina University',
    'Farmingdale State College',
    'Georgia Institute of Technology-Main Campus',
    'Hofstra University',
    'Indiana Institute of Technology',
    'Jewish Theological Seminary of America',
    'Keiser University-Ft Lauderdale',
    'Lewis University',
    'Marian University',
    'Northwestern State University of Louisiana',
    'Ohio State University',
    'Pacific Islands University',
    'Queens University of Charlotte',
    'Radford University',
    'Saint Mary\'s College of California',
    'Toccoa Falls College',
    'University of Central Arkansas',
    'Vincennes University',
    'Wright State University',
    'Xavier University',
    'Youngstown State University',
    'Zaytuna College',
  ]; // Pulled manually from https://nces.ed.gov/collegenavigator

  const createInstructors = () => {
    const instructors = fs.createWriteStream('./db/data/instructors', { flags: 'a' }); // a for append mode.

    for (let id = 1; id <= numberToGenerate; id++) {
      let bool;
      const random = Math.random();
      let rating = random;
      while (!bool) {
        if (rating < 3.9) {
          rating++;
        } else {
          bool = true;
        }
      }

      const instructor = {
        id,
        firstName: faker.name.firstName(),
        middleInitial: faker.name.middleName().slice(0, 1).toUpperCase(),
        lastName: faker.name.lastName(),
        academicTitle: random < 0.2 ? 'Instructor'
          : random < 0.4 ? 'Associate Professor'
            : random < 0.85 ? 'Professor'
              : 'PhD',
        title: faker.name.title(),
        organization: schools[Math.floor(random * schools.length)],
        learners: Math.floor(random * 5000),
        courses: [],
        instructorAverageRating: Number.parseFloat(rating).toPrecision(2),
        numberOfRatings: Math.floor(rating * random * 2345),
      };
      instructors.write(`${JSON.stringify(instructor)}\n`);
    }
  };

  // adds one primary instructor per course
  const addPrimaryInstructors = () => {
    const primaryInstructors = fs.createWriteStream('./db/data/primary-instructors', { flags: 'a' });
    const counts = {};

    for (let i = 1; i <= numberToGenerate; i++) {
      const instructorId = Math.floor(Math.random() * (numberToGenerate / 4)) + 1;
      const courseObj = {
        courseNumber: i,
        isPrimaryInstructor: true,
        instructorId,
      };

      // assigns from 0 to 4 courses per instructor
      if (!counts[instructorId]) {
        counts[instructorId] = 1;
        primaryInstructors.write(`${JSON.stringify(courseObj)}\n`);
      } else if (counts[instructorId] < 4) {
        counts[instructorId]++;
        primaryInstructors.write(`${JSON.stringify(courseObj)}\n`);
      } else {
        i--;
      }
    }
  };

  // assigns 0 to 3 assistant instructors per course, no min or max courses per assistant
  const addAssistantInstructors = () => {
    const assistantInstructors = fs.createWriteStream('./db/data/assistant-instructors', { flags: 'a' });
    for (let courseNumber = 1; courseNumber <= numberToGenerate; courseNumber++) {
      const numberOfAssistants = Math.floor(Math.random() * 4);
      const assistants = [];
      while (assistants.length < numberOfAssistants) {
        const assistantIndex = Math.floor(Math.random() * numberToGenerate) + 1;

        // prevents the same instructor from being added twice to the same course
        if (!assistants.includes(assistantIndex)) {
          assistants.push(assistantIndex);
        }
      }
      for (let i = 0; i < assistants.length; i++) {
        const assistantObject = {
          courseNumber,
          isPrimaryInstructor: false,
          instructorId: assistants[i],
        };
        assistantInstructors.write(`${JSON.stringify(assistantObject)}\n`);
      }
    }
  };

  createInstructors();
  addPrimaryInstructors();
  addAssistantInstructors();
};

module.exports = generateInstructors;
generateInstructors();
