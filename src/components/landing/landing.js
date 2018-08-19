import React, { Component } from 'react';
import Navbar from '../general/navbar'
import Slideshow from '../general/slideshow'
import './landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />  
        <div className="slide-view">
          <Slideshow />
        </div>
        <div className="products-view">
          {/* <ProductCard /> */}
        </div>
      </div>
    );
  }
}

export default Landing;
