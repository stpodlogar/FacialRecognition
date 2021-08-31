import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center'>
      <div className='image-wrapper'>
        <img id='image-input' alt='' src={imageUrl} width='100%' height='auto'></img>
        {/* Iterate through imported array box */}
        {box.map((element, index) => {
          return <div className='bounding-box' key={index} style={{top: element.topRow, right: element.rightCol, bottom: element.bottomRow, left: element.leftCol}}></div>
        })}
      </div>
    </div>
  )
}

export default FaceRecognition;