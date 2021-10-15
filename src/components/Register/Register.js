import React from 'react';
import './Register.css';

class Register extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitRegister = (event) => {
    event.preventDefault();
    fetch('https://dry-brushlands-21630.herokuapp.com/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className='center'>
        <div className='signin-container'>
          <h2>Register</h2>
          <form onSubmit={this.onSubmitRegister} noValidate>
            <div className='form-group'>  
              <input 
                type='text' 
                name='name' 
                id='name'
                placeholder='Name'
                autoComplete='given-name'
                onChange = {this.onNameChange}
              />
            </div>
            <div className='form-group'> 
              <input 
                type='email'
                name='email-address' 
                id='email-address'
                placeholder='Email'
                autoComplete='email'
                onChange = {this.onEmailChange}
              />
            </div>
            <div className='form-group'>              
              <input 
                onChange={this.onPasswordChange}
                type='password' 
                name='password' 
                id='password'
                placeholder='Password'
                autoComplete='newPassword'
              />
            </div>
            <div>
              <input
                onClick={this.onSubmitRegister}
                className='btn btn-primary register' 
                type='submit' 
                value='Register'>
              </input>
            </div>
          </form>
          <div className='register-cta'>
            <p>Already have an account?</p>
            <button onClick={() => onRouteChange('signin')} className='btn link'>Sign in</button>
          </div>
        </div>
      </article>
    )
  }
}

export default Register;