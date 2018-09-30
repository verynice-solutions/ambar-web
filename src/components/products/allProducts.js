import React, { Component } from 'react';
import ProductCard from '../products/productCard'
import productsActions from '../../actions/products_actions'
import './allProducts.css';

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingProducts: null,
      allCategories: null
    }
  }
  
  componentDidMount() {
    productsActions.getAll().then((resp)=>{
      this.setState({showingProducts: resp.data})
    })
    productsActions.getAllCategories().then((resp) => {
      console.log(resp)
      this.setState({allCategories: resp})
    })
  }
  render() {
    let products = this.state.showingProducts
    let categories = this.state.allCategories
    return (
      <div>
        <h3> Productos </h3>
        <div className="dropdown">
          <span>Filtrar</span>
          <div className="dropdown-items">
            <p><a>menor a mayor precio</a></p>
            <p><a>mayor a menor precio</a></p>
          </div>
        </div>
        <div className="products-section">
          <div className="products-section">
            <div className="side-section">
            <h3>Categorias</h3>
              {
                categories&& categories.map((cat)=>{
                  return <a>{cat}</a>
                })
              }
            </div>
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
      </div>
    );
  }
}

export default AllProducts;