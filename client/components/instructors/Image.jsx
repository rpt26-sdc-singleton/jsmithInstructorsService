import React, { useContext } from 'react';
import InstructorsContext from './Instructors.jsx';

const Image = (props) => {
  const context = useContext(InstructorsContext);
  let imageURL;

  if (props.isPrimary) {
    imageURL = context.imagesData.primaryInstructor;
  } else {
    context.imagesData.additionalInstructors.forEach((instructor) => {
      if (instructor.instructorId = props.instructorId) {
        imageURL = instructor.instructorImage;
      }
    });
  }


  return (
    <div className="image">
      <img src={imageURL}></img>
    </div>
  );
};

export default Image;