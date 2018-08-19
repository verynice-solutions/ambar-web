import React, { Component } from 'react';
import './productCard.css'

class ProductCard extends Component {
  render() {
    return (
      <div className='product-card'>
        <div className='card-image'>
         <img className="carousel-img" src="https://i.pinimg.com/originals/3b/d9/9f/3bd99fc9e80a4a5cc995e136dbf342a3.jpg"/>
        </div>
        <div className='card-info'>
          <div className='card-title'>
            <h3> Title </h3>
          </div>
          <div className='card-description'>
            <button> Comprar </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
