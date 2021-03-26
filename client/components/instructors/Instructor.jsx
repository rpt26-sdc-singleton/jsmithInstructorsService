import React, { useState, useEffect } from 'react';
import Details from './Details.jsx';
import Image from './Image.jsx';

const Instructor = (props) => {
  return (
    <div className="instructor">
      <Image image={props.image} />
      <Details instructor={props.instructor} svgs={props.svgs} />
    </div>
  );
};

export default Instructor;