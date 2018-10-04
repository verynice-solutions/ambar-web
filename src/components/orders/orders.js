import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import OrderActions from '../../actions/orders_actions'
import './orders.css'
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
      console.log(resp)
      this.setState({allOrders: resp})
    })
  }

  secondsToHms(d) {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    let hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
    let sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
    return hDisplay + mDisplay + sDisplay; 
    }

  render() {
    let orders = this.state.allOrders
    return (
      <div className="orders-view">
        <h3>Ordenes</h3>
        <table>
          <tr>
            <th>ORDEN</th>
            <th>ESTIMADO</th>
            <th>ITEM</th>
            <th>CANTIDAD</th>
            <th>PRECIO</th>
          </tr>
          {
            orders&& (
              orders.map((item, i)=>{
                return item.order_items.map((o_item, ii)=>{
                  return <tr>
                    {ii===0?(<td>{item.id}</td>):(<td/>)}
                    {ii===0?(<td>{this.secondsToHms(item.estimate)}</td>):(<td/>)}
                    <td>{o_item.title}</td>
                    <td>{o_item.quantity}</td>
                    <td>${o_item.price}</td>
                  </tr>
                })
              })
            )
          }
        </table>
      </div>
  );
  }
}

export default Orders;
