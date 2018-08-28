import React, { Component } from 'react';

import Slideshow from '../general/slideshow'
import ProductCard from '../products/productCard'
import './landing.css';

class Landing extends Component {

  render() {
    return (
      <div>
        <div className="slide-view">
          <Slideshow />
        </div>
        <div className="products-view">
          <div className="products">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
