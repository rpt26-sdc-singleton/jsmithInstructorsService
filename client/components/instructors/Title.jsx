import React from 'react';

const Title = (props) => {
  const instructorAcademicTitle = props.instructor.academicTitle === 'PhD' ? 'Dr. ' : '';
  return (
    <div className="instructor-details">
      <div className="instructor-name">
        {`${instructorAcademicTitle}${props.instructor.firstName} ${props.instructor.lastName}`}
      </div>
      <div className="instructor-title">
        {props.instructor.title}
      </div>
      <div className="instructor-org">
        {props.instructor.organization}
      </div>
      <div className="instructor-learners">
        {props.instructor.learners}
      </div>
      <div className="instructor-courses">
        {props.instructor.courses.length}
      </div>
    </div>
  );
};

export default Title;