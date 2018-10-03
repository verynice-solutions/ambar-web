import React, { Component } from 'react';
import ProductCard from '../products/productCard'
import productsActions from '../../actions/products_actions'
import './allProducts.css';

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingProducts: null,
      currentCategories: null,
      currentName: ''
    }
    this.showCategory = this.showCategory.bind(this)
    this.setFilter = this.setFilter.bind(this)

  }
  
  componentDidMount() {
    productsActions.getAll().then((resp)=>{
      this.setState({showingProducts: resp.data})
    })
    productsActions.getAllCategories().then((resp) => {
      console.log(resp)
      this.setState({currentCategories: resp, currentName: 'TODAS'})
    })
  }
  showCategory(e) {
    e.preventDefault()
    let category = e.target.name
    productsActions.filterProducts('category', category).then((resp) => {
      this.setState({showingProducts: resp.data, currentName: category})
    })
  }

  setFilter(e) {
    e.preventDefault()
    let type = e.target.name
    let name = this.state.currentName
    name === '' || name === 'TODAS' && (name = null)
    productsActions.filterProducts(type, name).then((resp) => {
      this.setState({showingProducts: resp.data})
    })
  }

  render() {
    let products = this.state.showingProducts
    let categories = this.state.currentCategories
    return (
      <div>
        <h3> Productos </h3>
        <div className="products-filter">
          <div className="dropdown">
            <a>Filtrar</a>
            <div className="dropdown-items">
              <p><a name="price_asc" onClick={this.setFilter}>menor a mayor precio</a></p>
              <p><a name="price_desc" onClick={this.setFilter}>mayor a menor precio</a></p>
            </div>
          </div>
          <div>
            <p>Categoría: {this.state.currentName}</p>
          </div>
        </div>
        
        <div className="products-section">
          <div className="side-section">
          <h6 style={{borderBottom: '1px solid #273b84', color:'#273b84'}}>Categorias</h6>
            {
              categories&& categories.map((cat)=>{
                return <a name={cat.name} onClick={this.showCategory}>{cat.name}</a>
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
    );
  }
}

export default AllProducts;