import React from 'react';
import faceRec from './faceRecognition.png';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <button onClick={() => onRouteChange('signout')} className='btn btn-secondary'>Sign Out</button>
      </nav>
    )
  }
  else {
    return (
      <nav>
        <button onClick={() => onRouteChange('signin')} className='btn btn-secondary'>Sign In</button>
        <button onClick={() => onRouteChange('register')} className='btn btn-secondary'>Register</button>
      </nav>
    )
  }
}

export default Navigation;