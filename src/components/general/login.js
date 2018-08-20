import React, { Component } from 'react';
import './login.css'

class Login extends Component {
  
  render() {

    return (
      <div>        
          Login
          <div className='login-form'>
            <label for="email"><b>E-mail</b></label>
            <input type="text" placeholder="Enter E-mail" name="email" />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" />
              
            <button type="submit">Login</button>
          </div>
      </div>
    );
  }
}

export default Login;
