import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
  return (
    <article className='center'>
      <div className='signin-container'>
        <fieldset>
          <legend>Register</legend>
          <div className='form-group'>
            <label htmlFor='email-address'>Name</label>
            <input type='text' name='name' id='name'></input>
          </div>
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
      </div>
    </article>
  )
}

export default Register;