import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div class="header">
        <a href="#default" class="logo">            
         <img className="logo-img" src="/ambar-logo.png" />
        </a>
        <div class="header-right">
          {/* <a class="active" href="#home">Home</a> */}
          <a href="#shopping-cart">Carrito</a>
          <a href="#inicio">Inicio</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
