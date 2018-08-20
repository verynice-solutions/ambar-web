import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './shopcart.css'

// @inject("rootStore")
// @observer
class Shopcart extends Component {
  
  render() {

    return (
      <div>        
        Shopping Cart
        <div className='shop-form'>
            <div className='shop-list'>
               {
                 //to map...
               }
              <div className='cart-item'>
                <div>
                  Nombre
                </div>
                <div>
                  Cantidad
                </div>
                <div>
                  Precio
                </div>
              </div>
            <br/>
            </div>

            <label for="email"><b>E-mail</b></label>
            <input type="text" placeholder="Enter E-mail" name="email" />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" />
              
            <button type="submit">Crear Orden</button>
          </div>
      </div>
    );
  }
}

export default Shopcart;
