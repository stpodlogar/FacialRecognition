import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, isLoading }) => {
  return (
    <section className='center image-container'>
      <div className='inner-image-container'>
        <FontAwesomeIcon icon={faImages} size='5x' inverse className='image-icon'/>
        <div className='image-wrapper'>
          <img id='image-input' alt='' src={imageUrl} width='100%' height='auto'></img>
          {/* Conditional isLoading = true then render loading icon */}
          {isLoading && <div className='lds-dual-ring'></div>}
          {/* Iterate through imported array box */}
          {box.map((element, index) => {
            return <div className='bounding-box' key={index} style={{top: element.topRow, right: element.rightCol, bottom: element.bottomRow, left: element.leftCol}}></div>
          })}
        </div>
      </div>
    </section>
  )
}

export default FaceRecognition;