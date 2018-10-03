import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom'
import './productCard.css'

@inject("rootStore")  // this.props.rootStore.cartStore.items
@observer
class ProductCard extends Component {


  addItemToCart= (item) => {
    console.log(this.props.rootStore.cartStore.allItems)
    alert("Producto añadido")
    this.props.rootStore.cartStore.addItem(item)
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
            <h5> {product.attributes.title} </h5>
          </div>
          <div>
            <p> $ {product.attributes.price} </p>
          </div>
          <div className='card-description'>
            <button onClick={() => this.addItemToCart(product.attributes)}> Agregar </button>
            <button onClick={()=>this.props.history.push(`product/${product.id}`)}> + info </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductCard);
