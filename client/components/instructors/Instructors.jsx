import React, { createContext, useState, useEffect } from 'react';
import initialState from './initialState';
import Instructor from './Instructor.jsx';
const InstructorsContext = createContext(initialState);

const Instructors = () => {
  const course = window.location.pathname.split('/')[1];
  const [courseNumber, setCourseNumber] = useState(course);
  const [instructorsData, setInstructorsData] = useState(initialState.instructorsData);
  const [imagesData, setImagesData] = useState(initialState.imagesData);
  const [label, setLabel] = useState('Instructor');
  const [svgs, setSvgs] = useState(initialState.svgs);

  useEffect(() => {
    //set instructors data for this course
    fetch(`http://localhost:3003/api/instructors/${courseNumber}`)
      .then((response) => response.json())
      .then((json) => {
        setInstructorsData(json);
        const newLabel = instructorsData.length > 1 ? 'Instructors' : 'Instructor';
        setLabel(newLabel);
      })
      .catch((err) => { if (err) { console.error(err); } });
    //set images data for this course
    fetch(`http://localhost:3006/api/images/${courseNumber}`)
      .then((response) => response.json())
      .then((json) => { setImagesData(json); })
      .catch((err) => {
        if (err) { console.error(err); }
      });
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
        <span className="instructors-svg" viewBox="0 0 48 48">
          <svg>
            <path d={svgs.instructorSVG}></path>
          </svg>
        </span>
        <span className="instructors-ratings">
          {`${instructorsData[0].instructorAverageRating}/5 (${instructorsData[0].numberOfRatings})`}
        </span>
        <span className="instructors-infoSVG" viewBox="0 0 48 48">
          <svg>
            <path d={svgs.infoSVG.i}></path>
            <path d={svgs.infoSVG.dot}></path>
            <polygon points={svgs.infoSVG.circle}></polygon>
          </svg>
        </span>
      </span>
      <InstructorsContext.Provider value={{ instructorsData, imagesData }}>
        {instructorsData.map((instructor, index) => {
          return <Instructor key={'instructor'.concat(index)} instructor={instructor} courseNumber={courseNumber} />;
        })}
      </InstructorsContext.Provider>
    </div>
  );
};

export default InstructorsContext;
export { Instructors };