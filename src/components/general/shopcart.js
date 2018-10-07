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
    let email = this.state.email
    let username = this.state.username
    let psw = this.state.psw
    if(email && username && psw === this.state.vpsw) {
      UserActions.signup(this.state.email, this.state.username, this.state.psw).then((response)=>{
        //login
        localStorage.setItem("sessionUser", JSON.stringify(response))
        this.props.rootStore.userStore.setUser(response)
        this.createOrder()
        console.log("HEREEEE", response)
      })
    }else{
      this.setState({ 
        error: 'Verifica los campos'
      });
    }
    
  }

  purchase =()=> {
    // If logged
    let session = this.props.rootStore.userStore.session()
    console.log(session)
    if (session) {
      //Create order
      this.createOrder()
    }else{
      this.register()
    }
  }

  createOrder() {
    let currentUser = this.props.rootStore.userStore.getCurrentUser
    let allItems = this.props.rootStore.cartStore.allItems
    let order = this.setOrder(currentUser.token, allItems)
    ProductActions.sendOrder(JSON.stringify(order)).then((resp)=>{
      console.log(resp)
      alert("Orden creada!")
      this.props.close()
    })
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
        <h4 style={{marginBottom: '6%'}}>Carrito</h4>
        <div className='shop-form'>
          {
            allItems.length > 0 ? (
              <div className='shop-list'>
                <div className='cart-item'>
                  <h5>Items</h5>
                  <div><div> <p style={{fontWeight: 'bold'}}>NOMBRE</p> </div>
                  <div> <p style={{fontWeight: 'bold'}}>PRECIO</p> </div></div>
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
                <div className="register-form">
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
              <button style={{color: 'red'}} onClick={()=>this.purchase()}  type="submit">Crear Orden</button>
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
