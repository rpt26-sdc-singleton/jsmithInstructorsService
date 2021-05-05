const create = require('./create');
const read = require('./read');

function testimonials(model) {
  return {
    createTestimonial: (testimonial) => create(model, testimonial),
    // in readTestimonial, cb should take a testimonial.
    readTestimonial: (id, cb) => read(model, id, cb),
  };
}

module.exports = testimonials;
