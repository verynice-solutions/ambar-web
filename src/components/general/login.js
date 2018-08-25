import React, { Component } from 'react';
import UserActions from '../../actions/user_actions'
import './login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  login =()=> {
    // UserActions.signup()
  }

  handleChange(e) {
    e.preventDefault();
    console.log([e.target.value])
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    return (
      <div>        
          Login
          <div className='login-form'>
            <label htmlFor="email"><b>E-mail</b></label>
            <input onChange={this.handleChange} type="text" placeholder="Enter E-mail" name="email" />

            <label htmlFor="psw"><b>Password</b></label>
            <input onChange={this.handleChange}  type="password" placeholder="Enter Password" name="password" />
              
            <button onClick={()=>this.login()} type="submit">Login</button>
          </div>
      </div>
    );
  }
}

export default Login;
