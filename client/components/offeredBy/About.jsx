import React from 'react';
import OfferedByConsumer from './OfferedBy.jsx';

const About = () => (
  <OfferedByConsumer>
    {value => offeredByData.offeredByDescription}
  </OfferedByConsumer>
);

export default About;