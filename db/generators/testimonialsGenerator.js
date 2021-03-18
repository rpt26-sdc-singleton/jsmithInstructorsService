const faker = require('faker');
const fs = require('fs');

//creates 9 testimonials
let generateTestimonials = () => {
  let testimonials = [];

  for (let id = 1; id <= 9; id++) {
    console.log('Testimonials generating data ', id, ' of 9');
    let testimonial = {
      id,
      name: faker.name.firstName().concat(' ', faker.name.lastName().slice(0, 1), '.'),
      testimonialText: faker.lorem.paragraph()
    };
    testimonials.push(testimonial);
  }

  fs.writeFileSync('./db/data/testimonials.json', JSON.stringify(testimonials, null, '\t'));
  return;
};

module.exports = generateTestimonials;
generateTestimonials();