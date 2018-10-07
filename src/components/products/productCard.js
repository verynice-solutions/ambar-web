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
          <div style={{width: '100%', height: '12.578125vw',padding: '0 2%',
            backgroundImage: `url(${product.links.image})`, backgroundPosition: 'center',
            backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} className="prod-img" />
        </div>
        <div className='card-info'>
          <div className='card-title'>
            <h5> {product.attributes.title} </h5>
          </div>
          <div className='card-info'>
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
