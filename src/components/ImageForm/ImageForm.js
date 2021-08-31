import React from 'react';
import './ImageForm.css';

const ImageInput = ({ onInputChange, onButtonSubmit }) => {
  return (
    <>
      <p>
        {'This Brain will detect faces in your pictures. Give it a try!'}
      </p>
      <div>
        <input type='text' onChange={onInputChange}></input>
        <button className='btn btn-secondary' onClick={onButtonSubmit}>Detect</button>
      </div>
    </>
  )
}

export default ImageInput;

