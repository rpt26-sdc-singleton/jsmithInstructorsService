import React from 'react';
import OfferedByConsumer from './OfferedBy.jsx';

const Name = () => (
  <OfferedByConsumer>
    {(value) => {
      console.log(offeredByData.offeredByName);
      // offeredByData.offeredByName;
    }}
  </OfferedByConsumer>
);

export default Name;