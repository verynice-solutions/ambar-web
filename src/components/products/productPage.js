import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ProductsActions from '../../actions/products_actions'
import CommentsActions from '../../actions/comments_actions'
import { withRouter } from 'react-router-dom'
import './productPage.css'

@inject("rootStore")  
@observer
class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: null,
      comment: null
    }
  }

  addItemToCart= (item) => {
    console.log(this.props.rootStore.cartStore.allItems)
    alert("Producto añadido")
    this.props.rootStore.cartStore.addItem(item)
  }

  addCommentToProduct = (item) => {
    if (this.state.comment == null) {
      console.log('empty comment');
    } else {
      let currentUser = this.props.rootStore.userStore.getCurrentUser;
      if (currentUser) {
        let item_id = item.id;
        CommentsActions.createNewComment(item_id, currentUser.token, this.state.comment);
        console.log('reached here');
      } else {
        console.log('nill current user');
      }
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
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
    console.log(product)
    return (
      <div>
        {
          product &&(
          <div>
            <div className="product-page-padding">
              <div className="product-page">
                <div>
                  <img className='product-img' src={product.links.image}/>
                  <div className='cajitas-color'>
                    {product.attributes.variants && product.attributes.variants.map((i)=>{
                      return <div className='cajita' onClick={()=>{
                        this.props.history.push(`/product/${i.id}`)
                        window.location.reload()
                      }}
                      style={{background: i.color, width: '16px', height: '16px', cursor: 'pointer'}}></div>
                    })}
                  </div>
                </div>
                <div className="product-detail">
                  <div>
                    <div className='rating'>
                      <div className="star-ratings-sprite"><span className="star-ratings-sprite-rating"></span></div>
                    </div>
                    <h3>{product.attributes.title}</h3>
                  </div>
                  <p>{product.attributes.description}</p>
                  <p> $ {product.attributes.price}</p>
                  <button  className="add-button" onClick={() => this.addItemToCart(product.attributes)}> Agregar </button>
                  {<div className="comments-container">
                    <form>
                      <textarea className='comment-area' onChange={this.handleChange} rows="5" name="comment" id="comment" placeholder="Comentario"></textarea>
                      <input onClick={() => this.addCommentToProduct(product.attributes)} className='comment-button' type="submit" name="submit" value="Comentar"></input>
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

export default withRouter(ProductPage);

