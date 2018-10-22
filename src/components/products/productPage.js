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
            <div className="product-page-padding">
              <div className="product-page"> 
                <div> <img src={product.links.image}/> </div>
                <div className="product-detail">
                  <div>
                    <div className='rating'>
                      <div class="star-ratings-sprite"><span className="star-ratings-sprite-rating"></span></div>
                    </div>
                    <h3>{product.attributes.title}</h3>
                  </div>
                  <p>{product.attributes.description}</p>
                  <p> $ {product.attributes.price}</p>
                  <button  className="add-button" onClick={() => this.addItemToCart(product.attributes)}> Agregar </button>
                  {<div className="comments-container">
                    <form>
                      <textarea rows="5" name="comment" id="comment" placeholder="Comentario"></textarea>
                      <input className='comment-button' type="submit" name="submit" value="Comentar"></input>
                    </form>
                  </div> }
                </div>
              </div>
            </div>
          </div>
          )
        }


      </div>
    );
  }
}

export default ProductPage;
