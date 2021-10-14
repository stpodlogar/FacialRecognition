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
    fetch('http://localhost:3000/register', {
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
<<<<<<< HEAD
<<<<<<< HEAD
          <legend>Register</legend>
          <form onSubmit={this.onSubmitRegister}>
            <div className='form-group'>  
=======
=======
>>>>>>> parent of 46e8615 (Sign-in validation message)
          <fieldset>
            <legend>Register</legend>
            <div className='form-group'>
             
<<<<<<< HEAD
>>>>>>> parent of 46e8615 (Sign-in validation message)
=======
>>>>>>> parent of 46e8615 (Sign-in validation message)
              <input 
                type='text' 
                name='name' 
                id='name'
                placeholder='Name'
                autoComplete='off'
                onChange = {this.onNameChange}
              />
            </div>
            <div className='form-group'>
              
              <input 
                type='email'
                name='email-address' 
                id='email-address'
                placeholder='Email'
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
              />
            </div>
          </fieldset>
          <div>
            <input
              onClick={this.onSubmitRegister}
              className='btn btn-primary register' 
              type='submit' 
              value='Register'>
            </input>
          </div>
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