import React, { useState, useEffect } from 'react';
import initialState from './initialState';
import Instructor from './Instructor.jsx';

const Instructors = () => {
  let splitPath = window.location.pathname.split('/')[1];
  const course = splitPath ? splitPath : 1;
  const [courseNumber, setCourseNumber] = useState(course);
  const [instructorsData, setInstructorsData] = useState(initialState.instructorsData);
  const [primaryInstructorImage, setPrimaryInstructorImage] = useState('');
  const [additionalInstructorImages, setAdditionalInstructorImages] = useState([{instructorId: 0, instructorImage: ''}]);
  const [label, setLabel] = useState('Instructor');
  const [svgs, setSvgs] = useState(initialState.svgs);

  useEffect(() => {
    //set instructors data for this course
    fetch(`http://localhost:3003/api/instructors/${courseNumber}`)
      .then((response) => response.json())
      .then((json) => {
        console.log('instructorsData: ', json);
        setInstructorsData(json);
        const newLabel = json.length > 1 ? 'Instructors' : 'Instructor';
        setLabel(newLabel);
      })
      .catch((err) => { if (err) { console.error(err); } });
    fetch(`http://localhost:3006/api/image/${courseNumber}/primaryInstructor`)
      .then((response) =>response.json())
      .then((json) => {
        console.log('PrimaryInstructorImage: ', json);
        setPrimaryInstructorImage(json.primaryInstructor);
      })
      .catch((err) => { if (err) { console.error(err); } });
    fetch(`http://localhost:3006/api/image/${courseNumber}/additionalInstructors`)
      .then((response) =>response.json())
      .then((json) => {
        console.log('additionalInstructorImages: ', json);
        setAdditionalInstructorImages(json.additionalInstructors);
      })
      .catch((err) => { if (err) { console.error(err); } });

    //set svgs
    fetch('http://localhost:3006/api/svgs')
      .then((response) => response.json())
      .then((json) => { setSvgs(json); })
      .catch((err) => { if (err) { console.error(err); } });
  }, []);

  return (

    <div className="instructors">
      <div className="instructor-label">
        {label}
      </div>
      <span className="instructors-rating">
        {'Instructor rating '}
        <span>
          <svg className="instructors-svg" viewBox="0 0 90 90">
            <path d={svgs.instructorSVG}></path>
          </svg>
        </span>
        <span className="instructors-ratings">
          {`${instructorsData[0].instructorAverageRating}/5 (${instructorsData[0].numberOfRatings} Ratings)`}
        </span>
        <span>
          <svg className="instructors-infoSVG" viewBox="0 0 80 80" height="30px" width="30px">
            <path d={svgs.infoSVG.i}></path>
            <path d={svgs.infoSVG.dot}></path>
            <polygon points={svgs.infoSVG.circle}></polygon>
          </svg>
        </span>
      </span>
      <div className="instructor-grid">
        {instructorsData.map((instructor, index) => {
        //set instructor image while mapping to pass it to props
          let isPrimary = false;
          let image = primaryInstructorImage;
          //is instructor primary?
          for (let i = 0; i < instructor.courses.length; i++) {
            if (instructor.courses[i].courseNumber === courseNumber) {
              isPrimary = true;
            }
          }
          //if instructor is not primary, find and set image in additionalInstructors
          if (!isPrimary) {
            for (let i = 0; i < additionalInstructorImages.length; i++) {
              if (instructor.id === additionalInstructorImages[i].instructorId) {
                image = additionalInstructorImages[i].instructorImage;
                break;
              }
            }
          }
          return <Instructor key={'instructor'.concat(index)} image={image} instructor={instructor} svgs={svgs} courseNumber={courseNumber} />;
        })}
      </div>

    </div>
  );
};

export default Instructors;