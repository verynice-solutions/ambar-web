import React, { Component } from 'react';
import Rodal from 'rodal';
import { observer, inject } from 'mobx-react';
// include styles
import 'rodal/lib/rodal.css';
import './navbar.css';

import Login from '../general/login'
import ShopCart from '../general/shopcart'

@inject("rootStore")  // this.props.rootStore.cartStore.items
@observer
class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      loginVisible: false,
      shoppingVisible: false,
      sessionUser: JSON.parse(localStorage.getItem("sessionUser"))
    };
    this.hide = this.hide.bind(this)
    this.show = this.show.bind(this)
    this.logout = this.logout.bind(this)
  }

  show(e) {
    e.preventDefault();
    // console.log("MOBX: ", this.props.rootStore.cartStore.items.length)
    this.setState({ [e.target.name]: true });
  }

  hide() {
    this.setState({ loginVisible: false, shoppingVisible: false });
  }

  logout() {
    this.props.rootStore.userStore.removeUser()
    window.location.href = '/'

  }

  render() {

    const cartStyle = {
      width: 'auto',
      maxWidth: '50vw',
      height: 'auto',
      maxHeight: '30vh',
      overflow: 'auto',
    }

    const loginStyle = {
      width: 'auto',
      maxWidth: '25vw',
      height: 'auto',
      maxHeight: '30vh',
      overflow: 'auto',
    }

    return (
      <div className="header">
                
        <Rodal customStyles={loginStyle} visible={this.state.loginVisible} onClose={this.hide}>
          <Login /> 
        </Rodal>

        <Rodal customStyles={cartStyle} visible={this.state.shoppingVisible} onClose={this.hide}>
          <ShopCart />
        </Rodal>

        <a href="/" className="logo">            
         <img alt="" className="logo-img" src="/ambar-logo.png" />
        </a>
        <div className="header-right">
          {/* <a class="active" href="#home">Home</a> */}
          <a href="/" name="shoppingVisible" onClick={this.show}> Carrito  {this.props.rootStore.cartStore.items.length}</a>
          <a href="/about"> Nosotros </a>
          {
            this.props.rootStore.userStore.session() ? (
              <span>
                <a href="/ordenes"> Ordenes </a>
                <a href="/" onClick={this.logout}> Salir </a>
              </span>
            ):(
              <a href="/" name="loginVisible" onClick={this.show}> Inicio </a>
            )
          }
        </div>
      </div>
    );
  }
}

export default Navbar;
