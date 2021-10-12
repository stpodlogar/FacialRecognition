import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './Signin.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: 'user@example.com',
      signInPassword: 'password'
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          console.log("Invalid User");
<<<<<<< HEAD
          document.querySelector('.notification.error').style.display = 'flex';
=======
>>>>>>> parent of 46e8615 (Sign-in validation message)
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className='center'>
        <div className='signin-container'>
<<<<<<< HEAD
          <div className='notification info'>
            <FontAwesomeIcon icon={faInfoCircle} size='2x' color='#173DB9'/>
            <p>For convenience, an example account is pre-loaded.</p>
          </div>
          <legend>Sign In</legend>
          <form onSubmit={this.onSubmitSignIn} noValidate>
            <div className='notification error'>
              <FontAwesomeIcon icon={faExclamationTriangle} size='2x' color='#D5390D'/>
              <p className='login-validation'>Incorrect username or password.</p>
            </div>
=======
          <fieldset>
            <legend>Sign In</legend>
>>>>>>> parent of 46e8615 (Sign-in validation message)
            <div className='form-group'>
              
              <input 
                onChange={this.onEmailChange} 
                type='email' 
                name='email-address' 
                id='email-address'
                placeholder='Email'
<<<<<<< HEAD
                autoComplete='email'
                value={this.state.signInEmail}
=======
>>>>>>> parent of 46e8615 (Sign-in validation message)
              />
            </div>
            <div className='form-group'>
              
              <input 
                onChange = {this.onPasswordChange}
                type='password' 
                name='password' 
                id='password'
                placeholder='Password'
<<<<<<< HEAD
                autoComplete='current-password'
                value={this.state.signInPassword}
=======
>>>>>>> parent of 46e8615 (Sign-in validation message)
              />
            </div>
          </fieldset>
          <div>
            <button
              onClick={this.onSubmitSignIn}
              onSubmit={this.onSubmitSignIn}
              className='btn btn-primary sign-in' 
              type='submit' 
              >Sign in
            </button>
          </div>
          <div className='register-cta'>
            <p>Don't have an account?</p>
            <button onClick={() => onRouteChange('register')} className='btn link'>Register</button>
          </div>
        </div>
      </article>
    )
  }
}

export default Signin;