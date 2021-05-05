const create = require('./create');
const read = require('./read');
const update = require('./update');
const del = require('./delete');

function testimonials(model) {
  return {
    createTestimonial: ({ name, text }) => create(model, { name, testimonialText: text }),
    readTestimonial: (id) => read(model, id),
    updateTestimonial: (id, testimonial) => update(model, id, testimonial),
    deleteTestimonial: (id) => del(model, id),
  };
}

module.exports = testimonials;
