import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom'
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
    this.props.history.push('/')
  }

  render() {

    let cartStyle = {
      width: '40vw',
      height: '35vw',
      overflow: 'auto',
    }

    let loginStyle = {
      width: '25vw',
      height: '20vw',
      overflow: 'auto',
    }
    if(document.documentElement.clientWidth < 700) {
      cartStyle = {
        width: '90vw',
        height: '80vw',
        overflow: 'auto',
      }
      loginStyle = {
        width: '90vw',
        height: '60vw',
        overflow: 'auto',
      }
    }
    return (
      <div className="header">

        <Rodal customStyles={loginStyle} visible={this.state.loginVisible} onClose={this.hide}>
          <Login close={this.hide}/> 
        </Rodal>
        <Rodal customStyles={cartStyle} visible={this.state.shoppingVisible} onClose={this.hide}>
          <ShopCart  close={this.hide}/>
        </Rodal>
        

        <Link to="/"><a className="header-logo">            
         Ámbar
        </a></Link>
        <div className="header-right">
          {/* <a class="active" href="#home">Home</a> */}
        <Link to="/"> <a href="/" name="shoppingVisible" onClick={this.show}> 
            <img width="32px" height="32px" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/cart-512.png" />
            &nbsp;{this.props.rootStore.cartStore.items.length}
          </a>
        </Link>
          <Link to="/products"><a>
            <img width="32px" height="32px" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/heart-512.png" />
            &nbsp; Categorías 
          </a></Link>
          {
            this.props.rootStore.userStore.session() ? (
              <span>
                <Link to="/ordenes"><a href="/"> Órdenes </a></Link>
                <Link to="/"><a href="/" onClick={this.logout}> 
                 <img width="32px" height="32px" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png" />
                 &nbsp; Salir 
                 </a></Link>
              </span>
            ):(
              <Link to="/"><a href="/" name="loginVisible" onClick={this.show}> 
               <img width="32px" height="32px" src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-512.png" />
               &nbsp; Inicio 
              </a></Link>
            )
          }
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
