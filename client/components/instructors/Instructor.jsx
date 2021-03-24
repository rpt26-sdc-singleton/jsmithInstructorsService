import React, { useState, useEffect } from 'react';
import About from './About.jsx';
// import Title from './Title.jsx';
import Image from './Image.jsx';

const Instructor = (props) => {
  // console.log('instructor props: ', props);
  return (
    <div className="instructor">
      <Image image={props.image} />
      <About instructor={props.instructor} svgs={props.svgs} />
    </div>
  );
};


export default Instructor;