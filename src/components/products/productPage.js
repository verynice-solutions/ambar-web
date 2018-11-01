import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ProductsActions from '../../actions/products_actions'
import CommentsActions from '../../actions/comments_actions'
import RankingActions from '../../actions/ranking_actions'
import { withRouter } from 'react-router-dom'
import './productPage.css'
import ReactStars from 'react-stars'
import { render } from 'react-dom'

@inject("rootStore")  
@observer
class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: null,
      productComments: null,
      comment: null,
      averageRanking: 0
    }
  }

  ratingChanged = (newValue) => {
    let currentUser = this.props.rootStore.userStore.getCurrentUser;
      if (currentUser) {
        let item = this.state.productInfo;
        RankingActions.createNewRanking(item.id, currentUser.token, newValue);
        console.log('reached here');
        let id = this.props.match.params.id
        RankingActions.getAllRankings(id).then((resp) => {
          if(resp.status !== 403) {
            this.setState({averageRanking: resp.data})
          }
        })
      } else {
        console.log('nill current user');
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
    CommentsActions.getAllComments(id).then((resp) => {
      if(resp.status !== 403){
        this.setState({productComments: resp.data})
      }
    })
    RankingActions.getAllRankings(id).then((resp) => {
      if(resp.status !== 403) {
        this.setState({averageRanking: resp.data})
      }
    })
  }

  render() {
    let product = this.state.productInfo
    let ranking = this.state.averageRanking
    console.log(`${ranking}fafdsf`)
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
                    <h3>{product.attributes.title}</h3>
                    <div style={{marginBottom: '1em'}}>
                          { <ReactStars
                            value={this.state.averageRanking}
                            count={5}
                            size={24}
                            color2={'orange'}
                            onChange= {(newValue) => { this.ratingChanged(newValue) }}
                           />
                          }
                    </div>
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
              <div className='comment-flex'>
                <div className='comment-scroll'>
                  { this.state.productComments && this.state.productComments.map((i)=>{
                    return <div style={{ paddingLeft: '0.8em', textAlign: 'left', paddingTop: '0.7em'}}>
                              <div style={{ fontWeight: 'bold', fontFamily: 'Times new Roman'}}>Usuario: {i.user.email}</div>
                              <p style={{fontFamily: 'Times new Roman'}}>Comment: {i.message}</p>
                              <hr style={{ color: 'black', width:'156vh'}}/>
                          </div>
                  })}
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

