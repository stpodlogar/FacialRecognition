import React from 'react';
import './ImageForm.css';

const ImageInput = ({ onInputChange, onButtonSubmit }) => {
  return (
    <section className='image-form-container'>
      <p>
        {'This AI will detect faces in your pictures. Give it a try!'}
      </p>
      <div className='image-form'>
        <input className='image-input' type='text' placeholder='Image URL' onChange={onInputChange}></input>
        <button className='btn btn-primary' onClick={onButtonSubmit}>Detect</button>
      </div>
    </section>
  )
}

export default ImageInput;

