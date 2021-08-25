import React from 'react';
import './ImageForm.css';

const ImageInput = () => {
  return (
    <>
      <p>
        {'This Brain will detect faces in your pictures. Give it a try!'}
      </p>
      <div>
        <input type='text'></input>
        <button className='btn'>Detect</button>
      </div>
    </>
  )
}

export default ImageInput;

