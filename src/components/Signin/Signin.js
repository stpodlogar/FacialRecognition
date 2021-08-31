import React from 'react';
import './Signin.css';

const Signin = ({ onRouteChange }) => {
  return (
    <article className='center'>
      <div className='signin-container'>
        <fieldset>
          <legend>Sign In</legend>
          <div className='form-group'>
            <label htmlFor='email-address'>Email</label>
            <input type='email' name='email-address' id='email-address'></input>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password'></input>
          </div>
        </fieldset>
        <div>
          <input
            onClick={() => onRouteChange('home')}
            className='btn btn-primary' 
            type='submit' 
            value='Sign in'>
          </input>
        </div>
        <div>
          <button onClick={() => onRouteChange('register')} className='btn'>Register</button>
        </div>
      </div>
    </article>
  )
}

export default Signin;