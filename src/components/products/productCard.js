import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import './productCard.css'

@inject("rootStore")  // this.props.rootStore.cartStore.items
@observer
class ProductCard extends Component {


  addItemToCart= (id, name, qty) => {
    console.log(this.props.rootStore.cartStore.allItems)
    alert("Producto añadido")
    this.props.rootStore.cartStore.addItem(id, name, qty)
  }

  render() {
    let product = this.props.productInfo
    return (
      <div className='product-card'>
        <div className='card-image'>
         <img alt="" className="carousel-img" src={product.links.image}/>
        </div>
        <div className='card-info'>
          <div className='card-title'>
            <h3> {product.attributes.title} </h3>
          </div>
          <div className='card-description'>
            <button onClick={() => this.addItemToCart(1,"item1",3)}> Agregar </button>
            <button onClick={()=>this.props.history.push(`product/${product.id}`)}> + info </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductCard);
