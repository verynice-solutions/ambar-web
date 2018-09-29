import React, { Component } from 'react';

import Slideshow from '../general/slideshow'
import ProductCard from '../products/productCard'
import productsActions from '../../actions/products_actions'

import './landing.css';

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allProducts: null
    }
  }
  

  componentDidMount() {
    productsActions.getAll().then((resp)=>{
      this.setState({allProducts: resp.data})
    })
  }

  render() {
    let products = this.state.allProducts
    return (
      <div>
        <div className="slide-view">
          {/* <Slideshow /> */}
          <iframe title="promovid" src="https://streamable.com/s/tug3b/dvnwmc?autoplay=1&muted=1" frameborder="0"/>
        </div>
        <div className="products-view">
          <div className="products">
          {
            products && (
              products.map((product)=>{
                return <ProductCard productInfo={product}/>
              })
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
