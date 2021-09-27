import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <button onClick={() => onRouteChange('signout')} className='btn btn-primary'>Sign Out</button>
      </nav>
    )
  }
  else {
    return (
      null
    )
  }
}

export default Navigation;