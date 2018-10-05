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

  addItemToCart= (item) => {
    console.log(this.props.rootStore.cartStore.allItems)
    alert("Producto añadido")
    this.props.rootStore.cartStore.addItem(item)
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
          <div> 
            <div className="product-page"> 
              <div> <img src={product.links.image}/> </div>
              <div className="product-detail">
                <h3>{product.attributes.title} </h3>
                <p>{product.attributes.description}</p>
                <button onClick={() => this.addItemToCart(product.attributes)}> Agregar </button>
              </div>
            </div>
            {/* <div className="comments-container">
              <form>
                <textarea rows="10" name="comment" id="comment" placeholder="Comentario"></textarea>
                <input type="submit" name="submit" value="Comentar"></input>
              </form> 
            </div> */}
          </div>
          )
        }


      </div>
    );
  }
}

export default ProductPage;
