import React from 'react';

const Image = (props) => {
  return (
    <div >
      <img className="instructor-image" src={props.image}></img>
    </div>
  );
};

export default Image;