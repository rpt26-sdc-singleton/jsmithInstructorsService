const create = require('./create');
const read = require('./read');
const update = require('./update');
const del = require('./delete');

function testimonials(model) {
  return {
    createTestimonial: (testimonial) => create(model, testimonial),
    readTestimonial: (id) => read(model, id),
    updateTestimonial: (id, testimonial) => update(model, id, testimonial),
    deleteTestimonial: (id) => del(model, id),
  };
}

module.exports = testimonials;
