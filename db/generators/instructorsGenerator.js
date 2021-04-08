/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');
const fs = require('fs');

const generateInstructors = () => {
  const instructors = [];

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

  // creates 100 instructors
  const createInstructors = () => {
    for (let id = 1; id <= 100; id++) {
      // console.log('Instructors generating data for course ', id);
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
      instructors.push(instructor);
    }
  };

  // adds one primary instructor per course
  const addPrimaryInstructors = () => {
    for (let i = 1; i <= 100; i++) {
      const index = Math.floor(Math.random() * 40) + 1; // only first 40 as primaryInstructor
      const courseObj = {
        courseNumber: i,
        isPrimaryInstructor: true,
      };
      const filtered = instructors.filter((instructor) => instructor.id === index);
      const { id } = filtered[0];

      // assigns from 0 to 4 courses per instructor
      if (instructors[id + 1].courses.length < 4) {
        instructors[id + 1].courses.push(courseObj);
      } else {
        i--;
      }
    }
  };

  // assigns 0 to 3 assistant instructors per course, no min or max courses per assistant
  const addAssistantInstructors = () => {
    for (let courseNumber = 1; courseNumber <= 100; courseNumber++) {
      const numberOfAssistants = Math.floor(Math.random() * 4);
      const assistants = [];

      while (assistants.length < numberOfAssistants) {
        const assistantIndex = Math.floor(Math.random() * 61) + 39;

        // prevents the same instructor from being added twice to the same course
        if (!assistants.includes(assistantIndex)) {
          assistants.push(assistantIndex);
        }
      }
      for (let i = 0; i < assistants.length; i++) {
        const assistantObject = {
          courseNumber,
          isPrimaryInstructor: false,
        };
        instructors[assistants[i]].courses.push(assistantObject);
      }
    }
  };

  createInstructors();
  addPrimaryInstructors();
  addAssistantInstructors();
  fs.writeFileSync('./db/data/instructors.json', JSON.stringify(instructors, null, '\t'));
};

module.exports = generateInstructors;
generateInstructors();
