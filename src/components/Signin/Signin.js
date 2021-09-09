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
      .then(data => {
        if (data === 'success') {
          this.props.onRouteChange('home');
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
              <label htmlFor='email-address'>Email</label>
              <input 
                onChange={this.onEmailChange} 
                type='email' 
                name='email-address' 
                id='email-address'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input 
                onChange = {this.onPasswordChange}
                type='password' 
                name='password' 
                id='password'
              />
            </div>
          </fieldset>
          <div>
            <input
              onClick={this.onSubmitSignIn}
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
}

export default Signin;