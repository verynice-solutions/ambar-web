import React, { Component } from 'react';
import UserActions from '../../actions/user_actions'
import { observer, inject } from 'mobx-react';
import './login.css'

@inject("rootStore") 
@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      error: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  login =()=> {
    UserActions.login(this.state.email, this.state.password).then((resp)=>{
      console.log(resp)
      if (resp){
        if(resp.status){
          this.setState({
            error: 'Check your e-mail or password'
          })
        }else{
          // Set Session
          localStorage.setItem("sessionUser", JSON.stringify(resp))
          this.props.rootStore.userStore.setUser(resp)
          window.location.href = '/'
        }
      }
    })
  }

  handleChange(e) {
    e.preventDefault();
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
            {
              this.state.error && (
                <p>{this.state.error}</p>
              )
            }
          </div>
      </div>
    );
  }
}

export default Login;
