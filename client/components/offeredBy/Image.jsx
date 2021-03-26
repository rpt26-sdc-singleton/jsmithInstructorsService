import React from 'react';
import OfferedByConsumer from './OfferedBy.jsx';

const Title = () => (
  <OfferedByConsumer>
    {value => imagesData.offeredByMain}
  </OfferedByConsumer>
);

export default Title;