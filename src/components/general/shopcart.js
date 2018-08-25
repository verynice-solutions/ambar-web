import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import UserActions from '../../actions/user_actions'
import './shopcart.css'

@inject("rootStore")  // this.props.rootStore.cartStore.items
@observer
class Shopcart extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      username: '',
      psw: '',
      vpsw: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.register = this.register.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  register() {
    UserActions.signup(this.state.email, this.state.username, this.state.psw).then((response)=>{
      console.log(response)
    })
  }

  purchase =()=> {
    //If not logged
    this.register()
  }

  render() {
    let allItems = this.props.rootStore.cartStore.allItems

    return (
      <div>        
        Carrito
        <div className='shop-form'>
          {
            allItems.length > 0 ? (
              <div className='shop-list'>
              {
                //to map...
              }
             <div className='cart-item'>
               <div><div> Nombre </div>
               <div> Cantidad </div>
               <div> Precio </div></div>
             </div>
             <div className='cart-item'>
              {
                allItems && (
                 allItems.map((item)=>{
                   return <div key={item.id}> 
                     <div> {item.name} </div>
                     <div> {item.qty} </div>
                     <div> {item.price} </div>
                   </div>
                 })
               )
              }
             </div>
           <br/>
           </div>
            ):(
              <p> No items en el carrito </p>
            )
          }

            <label htmlFor="username"><b>Nombre</b></label>
            <input onChange={this.handleChange} type="text" placeholder="Nombre" name="username" />

            <label htmlFor="email"><b>E-mail</b></label>
            <input onChange={this.handleChange} type="text" placeholder="E-mail" name="email" />

            <label htmlFor="psw"><b>Password</b></label>
            <input onChange={this.handleChange} type="password" placeholder="Contraseña" name="psw" />

            <label htmlFor="vpsw"><b>Verifica Contraseña</b></label>
            <input onChange={this.handleChange} type="password" placeholder="Verifica Contraseña" name="vpsw" />
              
            <button onClick={()=>this.purchase()}  type="submit">Crear Orden</button>
          </div>
      </div>
    );
  }
}

export default Shopcart;
