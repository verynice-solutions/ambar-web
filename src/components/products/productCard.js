import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './productCard.css'

@inject("rootStore")  // this.props.rootStore.cartStore.items
@observer
class ProductCard extends Component {


  addItemToCart= (id, name, qty) => {
    console.log(this.props.rootStore.cartStore.allItems)
    this.props.rootStore.cartStore.addItem(id, name, qty)
  }

  render() {
    return (
      <div className='product-card'>
        <div className='card-image'>
         <img alt="" className="carousel-img" src="https://i.pinimg.com/originals/3b/d9/9f/3bd99fc9e80a4a5cc995e136dbf342a3.jpg"/>
        </div>
        <div className='card-info'>
          <div className='card-title'>
            <h3> Title </h3>
          </div>
          <div className='card-description'>
            <button onClick={() => this.addItemToCart(1,"item1",3)}> Agregar </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
