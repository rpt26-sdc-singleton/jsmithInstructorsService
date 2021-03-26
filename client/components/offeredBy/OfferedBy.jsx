import React, { useState, useEffect, createContext } from 'react';
import initialState from './initialState.js';
const OfferedByContext = createContext();
const OfferedByProvider = OfferedByContext.Provider;
import Title from './Title.jsx';
import Name from './Name.jsx';
import About from './About.jsx';
import Image from './Image.jsx';

const OfferedBys = () => {
  let splitPath = window.location.pathname.split('/')[1];
  const course = splitPath ? splitPath : 1;
  const [courseNumber, setCourseNumber] = useState(course);
  const [offeredByData, setOfferedByData] = useState(initialState.offeredByData);
  const [imagesData, setImagesData] = useState(initialState.imagesData);
  const offeredByPort = 3003;
  const imagesPort = 3006;
  //GET and set instructors data for this course as state
  useEffect(() => {
    fetch(`http://localhost:${offeredByPort}/api/offeredBy/${courseNumber}`)
      .then((offeredByResponse) => offeredByResponse.json())
      .then((offeredByJSON) => {
        setOfferedByData(offeredByJSON);
        return fetch(`http://localhost:${imagesPort}/api/images/${courseNumber}`);
      })
      .then((imagesResponse) => {
        return imagesResponse.json();
      })
      .then((imagesJSON) => {
        setImagesData(imagesJSON);
      })
      .catch((err) => { if (err) { console.error(err); } });
  }, []);

  return (
    <OfferedByProvider value={{ offeredByData, imagesData }}>
      <div className="offered-by">
        <Title />
        <div className="offered-by-outer-grid">
          {/* <Image /> */}
          <div className="offered-by-inner-grid">
            <Name />
            {/* <About /> */}
          </div>
        </div>
      </div>
    </OfferedByProvider>
  );
};

export default OfferedBys;
export const OfferedByConsumer = OfferedByContext.Consumer;