import _ from 'lodash'
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import UserActions from '../../actions/user_actions'
import ProductActions from '../../actions/products_actions'
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
      vpsw: '',
      error: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.register = this.register.bind(this)
    this.setOrder = this.setOrder.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  register() {
    if(this.state.psw === this.state.vpsw) {
      UserActions.signup(this.state.email, this.state.username, this.state.psw).then((response)=>{
        console.log(response)
      })
    }else{
      this.setState({ 
        error: 'Verifica tus contraseñas'
      });
    }
    
  }

  purchase =()=> {
    let currentUser = this.props.rootStore.userStore.getCurrentUser
    let allItems = this.props.rootStore.cartStore.allItems
    let order = this.setOrder(currentUser.token, allItems)
    ProductActions.sendOrder(JSON.stringify(order)).then((resp)=>{
      console.log(resp)
    })
    //If logged
    // let session = this.props.rootStore.userStore.session
    // console.log(session)
    // if (session) {
    //   //Make purchase
    //   console.log("HAI BUYY")
    // }else{
    //   this.register()
    // }
  }

  setOrder(auth, bag) {
    let order = {
      authorization: auth,
      status: 'created',
      order_items: _.countBy(bag, 'item.id')
    }
    return order;
  }

  render() {
    let allItems = this.props.rootStore.cartStore.allItems
    this.setOrder(allItems)
    return (
      <div>        
        Carrito
        <div className='shop-form'>
          {
            allItems.length > 0 ? (
              <div className='shop-list'>
                <div className='cart-item'>
                  <div><div> Nombre </div>
                  <div> Precio </div></div>
                </div>
                <div className='cart-item'>
                  {
                    allItems && (
                    allItems.map((item)=>{
                      return <div key={item.item.id}> 
                        <div> {item.item.title} </div>
                        <div> {item.item.price} </div>
                      </div>
                    })
                  )
                  }
                </div>
              <br/>

            {
              !this.props.rootStore.userStore.session() &&(
                <div>
                  <label htmlFor="username"><b>Nombre</b></label>
                  <input onChange={this.handleChange} type="text" placeholder="Nombre" name="username" />
      
                  <label htmlFor="email"><b>E-mail</b></label>
                  <input onChange={this.handleChange} type="text" placeholder="E-mail" name="email" />
      
                  <label htmlFor="psw"><b>Contraseña</b></label>
                  <input onChange={this.handleChange} type="password" placeholder="Contraseña" name="psw" />
      
                  <label htmlFor="vpsw"><b>Verifica Contraseña</b></label>
                  <input onChange={this.handleChange} type="password" placeholder="Verifica Contraseña" name="vpsw" />
                </div>
              )
            }
              {
                this.state.error && (
                  <p> {this.state.error} </p>
                )
              }
              <button onClick={()=>this.purchase()}  type="submit">Crear Orden</button>
           </div>
            ):(
              <p> No items en el carrito </p>
            )
          }
          </div>
      </div>
    );
  }
}

export default Shopcart;
