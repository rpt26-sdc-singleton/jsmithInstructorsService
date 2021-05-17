const fs = require('fs');

const numberToGenerate = 10000000; // ten million
const numberToGenerateInMemory = 10000; // ten thousand
const assistantsInMemory = [];

for (let i = 1; i <= numberToGenerate; i += numberToGenerateInMemory) {
  for (let j = 0; j < numberToGenerateInMemory; j += 1) {
    const courseNumber = i + j;
    const n = Math.floor(Math.random() * 4);
    if (n > 0) {
      const assistants = new Set();
      while (assistants.size < n) {
        assistants.add(Math.floor(Math.random() * numberToGenerate) + 1);
      }

      assistantsInMemory.push(JSON.stringify(Array.from(assistants).map((instructorId) => ({
        courseNumber,
        isPrimaryInstructor: false,
        instructorId,
      }))));
    }
    i += 1;
  }

  fs.writeFileSync('./db/data/assistant-instructors', assistantsInMemory.join('\n'), { flags: 'a' });
}
