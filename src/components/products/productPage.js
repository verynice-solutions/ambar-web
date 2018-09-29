import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ProductsActions from '../../actions/products_actions'
import './productPage.css'

@inject("rootStore")  
@observer
class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: null
    }
  }

  addItemToCart= (id, name, qty) => {
    console.log(this.props.rootStore.cartStore.allItems)
    alert("Producto añadido")
    this.props.rootStore.cartStore.addItem(id, name, qty)
  }
  
  componentDidMount() {
    let id = this.props.match.params.id
    ProductsActions.getProduct(id).then((resp)=>{
      if(resp.status !== 403){
        this.setState({productInfo: resp.data})
      }
    })
  }

  render() {
    let product = this.state.productInfo
    return (
      <div> 
        {
          product &&(
          <div className="product-page"> 
            <div>
            <img src={product.links.image}/>
            </div>
            <div className="product-detail">
              <h3>{product.attributes.title} </h3>
              <p>{product.attributes.description}</p>
              <button onClick={() => this.addItemToCart(1,"item1",3)}> Agregar </button>
            </div>
          </div>
          )
        }

      </div>
    );
  }
}

export default ProductPage;
