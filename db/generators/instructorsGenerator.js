/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
// eslint-disable-next-line import/no-extraneous-dependencies
// const faker = require('faker');
// const fs = require('fs');

const numberToGenerate = 10000000; // ten million
const estimatedMaxMemory = 1000000000; // one GB... mostly just a guess

const mutatingShuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    const temp = arr[i];

    // eslint sensibly warns you not to mutate your inputs, but I'm ignoring that here.
    // Why? This function is meant to handle large arrays (10 million elements)
    // therefore, I'm choosing to mutate the input for the sake of memory efficiency.

    // eslint-disable-next-line no-param-reassign
    arr[i] = arr[j];
    // eslint-disable-next-line no-param-reassign
    arr[j] = temp;
  }
};

console.log(process.memoryUsage().rss / estimatedMaxMemory);

const primaryInstructors = new Array(numberToGenerate);

console.log(process.memoryUsage().rss / estimatedMaxMemory);

for (let i = 0, j = 1; i < primaryInstructors.length; j++) {
  const coursesForThisInstructor = i + Math.floor(6 * Math.random());
  for (; i < coursesForThisInstructor; i++) {
    primaryInstructors[i] = j;
  }
}

console.log(process.memoryUsage().rss / estimatedMaxMemory);

// console.log(primaryInstructors.slice(0, 20));
// console.log(primaryInstructors.slice(numberToGenerate - 20));

mutatingShuffle(primaryInstructors);

// note: at this point, we're already using 67% of available memory...
// it might be wise to write the result to the file system before proceeding.

console.log(process.memoryUsage().rss / estimatedMaxMemory);

/*
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

  // creates instructors
  const createInstructors = () => {
    for (let id = 1; id <= numberToGenerate; id++) {
      // console.log('Instructors generating data for course ', id);
      if (id % 100000 === 0 && process.memoryUsage.rss() > (0.5 * process.resourceUsage().maxRSS)) {

      }

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
    for (let i = 1; i <= numberToGenerate; i++) {
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
    for (let courseNumber = 1; courseNumber <= numberToGenerate; courseNumber++) {
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
*/
