/* eslint-disable no-console */
function testimonials(m) {
  return {
    createTestimonial: ({ name, text }) => {
      m((db, model) => {
        // first get the id for the new testimonial
        model.aggregate([{
          $group: {
            _id: 1,
            maxId: { $max: '$id' },
          },
        }])
          .then((max) => max[0].maxId + 1)
          .then((id) => {
            model.create({
              id,
              name,
              testimonialText: text,
            });
          });
      });
    },
  };
}

module.exports = testimonials;
