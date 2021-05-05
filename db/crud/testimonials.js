const create = require('./create');

function testimonials(model) {
  return {
    createTestimonial: (testimonial) => create(model, testimonial),
  };
}

module.exports = testimonials;
