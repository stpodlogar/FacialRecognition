import React from 'react';
import './Signin.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
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
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className='center'>
        <div className='signin-container'>
          <fieldset>
            <legend>Sign In</legend>
            <div className='form-group'>
              
              <input 
                onChange={this.onEmailChange} 
                type='email' 
                name='email-address' 
                id='email-address'
                placeholder='Email'
              />
            </div>
            <div className='form-group'>
              
              <input 
                onChange = {this.onPasswordChange}
                type='password' 
                name='password' 
                id='password'
                placeholder='Password'
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