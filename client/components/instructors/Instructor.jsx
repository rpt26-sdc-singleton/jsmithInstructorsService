import React from 'react';
import About from './About.jsx';
import Title from './Title.jsx';
import Image from './Image.jsx';

const Instructor = (props) => {
  console.log('Instructor props: ', props);
  let isPrimary = false;
  let courses = props.instructor.courses;
  for (let i = 0; i < courses; i++) {
    if (courses[i].courseNumber === props.courseNumber) {
      isPrimary = true;
      break;
    }
  }
  return (
    <div className="instructor">
      <Image isPrimary={isPrimary} instructorId={props.instructor.id} />
      {/* <About /> */}
    </div>
  );
};


export default Instructor;