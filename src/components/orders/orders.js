import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import OrderActions from '../../actions/orders_actions'

@inject("rootStore")  // this.props.rootStore.cartStore.items
@observer
class Orders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allOrders: null
    }
  }
  

  componentDidMount() {
    let currentUser = this.props.rootStore.userStore.getCurrentUser
    OrderActions.getAllOrders(currentUser.token).then((resp)=>{
      console.log(resp.data)
      this.setState({allOrders: resp.data})
    })
  }

  render() {
    return (
      <div>
        ORDERS
      </div>
    );
  }
}

export default Orders;
